// @flow

import { getParticipantCountWithFake } from '../base/participants';
import { StateListenerRegistry, equals } from '../base/redux';
import { clientResized } from '../base/responsive-ui';
import { setFilmstripVisible } from '../filmstrip/actions';
import { getParticipantsPaneOpen } from '../participants-pane/functions';
import { setOverflowDrawer } from '../toolbox/actions.web';
import { getCurrentLayout, getTileViewGridDimensions, shouldDisplayTileView, LAYOUTS } from '../video-layout';

import {
    setHorizontalViewDimensions,
    setTileViewDimensions,
    setVerticalViewDimensions
} from './actions';
import {
    ASPECT_RATIO_BREAKPOINT,
    DISPLAY_DRAWER_THRESHOLD,
    SINGLE_COLUMN_BREAKPOINT,
    TWO_COLUMN_BREAKPOINT
} from './constants';
import './subscriber.any';


/**
 * Listens for changes in the number of participants to calculate the dimensions of the tile view grid and the tiles.
 */
StateListenerRegistry.register(
    /* selector */ getParticipantCountWithFake,
    /* listener */ (numberOfParticipants, store) => {
        const state = store.getState();

        if (shouldDisplayTileView(state)) {
            const gridDimensions = getTileViewGridDimensions(state);
            const oldGridDimensions = state['features/filmstrip'].tileViewDimensions.gridDimensions;

            if (!equals(gridDimensions, oldGridDimensions)) {
                store.dispatch(setTileViewDimensions(gridDimensions));
            }
        }
    });

/**
 * Listens for changes in the selected layout to calculate the dimensions of the tile view grid and horizontal view.
 */
StateListenerRegistry.register(
    /* selector */ state => getCurrentLayout(state),
    /* listener */ (layout, store) => {
        const state = store.getState();

        switch (layout) {
        case LAYOUTS.TILE_VIEW:
            store.dispatch(setTileViewDimensions(getTileViewGridDimensions(state)));
            break;
        case LAYOUTS.HORIZONTAL_FILMSTRIP_VIEW:
            store.dispatch(setHorizontalViewDimensions());
            break;
        case LAYOUTS.VERTICAL_FILMSTRIP_VIEW:
            store.dispatch(setVerticalViewDimensions());
            break;
        }
    });

/**
 * Listens for changes in the chat state to recompute available width.
 */
StateListenerRegistry.register(
    /* selector */ state => state['features/chat'].isOpen,
    /* listener */ (isChatOpen, store) => {
        const { innerWidth, innerHeight } = window;

        if (isChatOpen) {
            // $FlowFixMe
            document.body.classList.add('shift-right');
        } else {
            // $FlowFixMe
            document.body.classList.remove('shift-right');
        }

        store.dispatch(clientResized(innerWidth, innerHeight));
    });

/**
 * Listens for changes in the participant pane state to calculate the
 * dimensions of the tile view grid and the tiles.
 */
StateListenerRegistry.register(
    /* selector */ getParticipantsPaneOpen,
    /* listener */ (isOpen, store) => {
        const { innerWidth, innerHeight } = window;

        store.dispatch(clientResized(innerWidth, innerHeight));
    });


/**
 * Listens for changes in the client width to determine whether the overflow menu(s) should be displayed as drawers.
 */
StateListenerRegistry.register(
    /* selector */ state => state['features/base/responsive-ui'].clientWidth < DISPLAY_DRAWER_THRESHOLD,
    /* listener */ (widthBelowThreshold, store) => {
        store.dispatch(setOverflowDrawer(widthBelowThreshold));
    });

/**
 * Gracefully hide/show the filmstrip when going past threshold.
 */
StateListenerRegistry.register(
    /* selector */ state => state['features/base/responsive-ui'].clientWidth < ASPECT_RATIO_BREAKPOINT,
    /* listener */ (widthBelowThreshold, store) => {
        const state = store.getState();
        const { disableFilmstripAutohiding } = state['features/base/config'];

        if (!disableFilmstripAutohiding) {
            store.dispatch(setFilmstripVisible(!widthBelowThreshold));
        }
    });

/**
 * Symbol mapping used for the tile view responsiveness computation.
 */
const responsiveColumnMapping = {
    multipleColumns: Symbol('multipleColumns'),
    singleColumn: Symbol('singleColumn'),
    twoColumns: Symbol('twoColumns'),
    twoParticipantsSingleColumn: Symbol('twoParticipantsSingleColumn')
};

/**
 * Listens for changes in the screen size to recompute
 * the dimensions of the tile view grid and the tiles for responsiveness.
 */
StateListenerRegistry.register(
    /* selector */ state => {
        const { clientWidth } = state['features/base/responsive-ui'];

        if (clientWidth < TWO_COLUMN_BREAKPOINT && clientWidth >= ASPECT_RATIO_BREAKPOINT) {
            // Forcing the recomputation of tiles when screen switches in or out of
            // the (TWO_COLUMN_BREAKPOINT, ASPECT_RATIO_BREAKPOINT] interval.
            return responsiveColumnMapping.twoColumns;
        } else if (clientWidth < ASPECT_RATIO_BREAKPOINT && clientWidth >= SINGLE_COLUMN_BREAKPOINT) {
            // Forcing the recomputation of tiles when screen switches in or out of
            // the (ASPECT_RATIO_BREAKPOINT, SINGLE_COLUMN_BREAKPOINT] interval.
            return responsiveColumnMapping.twoParticipantsSingleColumn;
        } else if (clientWidth < SINGLE_COLUMN_BREAKPOINT) {
            // Forcing the recomputation of tiles when screen switches below SINGLE_COLUMN_BREAKPOINT.
            return responsiveColumnMapping.singleColumn;
        }

        // Forcing the recomputation of tiles when screen switches above TWO_COLUMN_BREAKPOINT.
        return responsiveColumnMapping.multipleColumns;
    },
    /* listener */ (_, store) => {
        const state = store.getState();

        if (shouldDisplayTileView(state)) {
            const gridDimensions = getTileViewGridDimensions(state);

            store.dispatch(setTileViewDimensions(gridDimensions));
        }
    });
