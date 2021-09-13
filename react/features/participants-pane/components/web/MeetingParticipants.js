// @flow

import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { isToolbarButtonEnabled } from '../../../base/config/functions.web';
import { MEDIA_TYPE } from '../../../base/media';
import {
    getParticipantCountWithFake,
    getSortedParticipantIds
} from '../../../base/participants';
import { connect } from '../../../base/redux';
import { showOverflowDrawer } from '../../../toolbox/functions';
import { muteRemote } from '../../../video-menu/actions.any';
import { findStyledAncestor, shouldRenderInviteButton } from '../../functions';
import { useParticipantDrawer } from '../../hooks';

import { InviteButton } from './InviteButton';
import MeetingParticipantContextMenu from './MeetingParticipantContextMenu';
import MeetingParticipantItems from './MeetingParticipantItems';
import { Heading, ParticipantContainer } from './styled';

type NullProto = {
    [key: string]: any,
    __proto__: null
};

type RaiseContext = NullProto | {|

    /**
     * Target elements against which positioning calculations are made.
     */
    offsetTarget?: HTMLElement,

    /**
     * The ID of the participant.
     */
    participantID ?: string,
|};

const initialState = Object.freeze(Object.create(null));

/**
 * Renders the MeetingParticipantList component.
 * NOTE: This component is not using useSelector on purpose. The child components MeetingParticipantItem
 * and MeetingParticipantContextMenu are using connect. Having those mixed leads to problems.
 * When this one was using useSelector and the other two were not -the other two were re-rendered before this one was
 * re-rendered, so when participant is leaving, we first re-render the item and menu components,
 * throwing errors (closing the page) before removing those components for the participant that left.
 *
 * @returns {ReactNode} - The component.
 */
function MeetingParticipants({ participantsCount, showInviteButton, overflowDrawer, sortedParticipantIds = [] }) {
    const dispatch = useDispatch();
    const isMouseOverMenu = useRef(false);

    const [ raiseContext, setRaiseContext ] = useState < RaiseContext >(initialState);
    const { t } = useTranslation();

    const lowerMenu = useCallback(() => {
        /**
         * We are tracking mouse movement over the active participant item and
         * the context menu. Due to the order of enter/leave events, we need to
         * defer checking if the mouse is over the context menu with
         * queueMicrotask
         */
        window.queueMicrotask(() => {
            if (isMouseOverMenu.current) {
                return;
            }

            if (raiseContext !== initialState) {
                setRaiseContext(initialState);
            }
        });
    }, [ raiseContext ]);

    const raiseMenu = useCallback((participantID, target) => {
        setRaiseContext({
            participantID,
            offsetTarget: findStyledAncestor(target, ParticipantContainer)
        });
    }, [ raiseContext ]);

    const toggleMenu = useCallback(participantID => e => {
        const { participantID: raisedParticipant } = raiseContext;

        if (raisedParticipant && raisedParticipant === participantID) {
            lowerMenu();
        } else {
            raiseMenu(participantID, e.target);
        }
    }, [ raiseContext ]);

    const menuEnter = useCallback(() => {
        isMouseOverMenu.current = true;
    }, []);

    const menuLeave = useCallback(() => {
        isMouseOverMenu.current = false;
        lowerMenu();
    }, [ lowerMenu ]);

    const muteAudio = useCallback(id => () => {
        dispatch(muteRemote(id, MEDIA_TYPE.AUDIO));
    }, [ dispatch ]);
    const [ drawerParticipant, closeDrawer, openDrawerForParticipant ] = useParticipantDrawer();

    // FIXME:
    // It seems that useTranslation is not very scallable. Unmount 500 components that have the useTranslation hook is
    // taking more than 10s. To workaround the issue we need to pass the texts as props. This is temporary and dirty
    // solution!!!
    // One potential proper fix would be to use react-window component in order to lower the number of components
    // mounted.
    const participantActionEllipsisLabel = t('MeetingParticipantItem.ParticipantActionEllipsis.options');
    const youText = t('chat.you');
    const askUnmuteText = t('participantsPane.actions.askUnmute');
    const muteParticipantButtonText = t('dialog.muteParticipantButton');

    return (
        <>
            <Heading>{t('participantsPane.headings.participantsList', { count: participantsCount })}</Heading>
            {showInviteButton && <InviteButton />}
            <div>
                <MeetingParticipantItems
                    askUnmuteText = { askUnmuteText }
                    lowerMenu = { lowerMenu }
                    muteAudio = { muteAudio }
                    muteParticipantButtonText = { muteParticipantButtonText }
                    openDrawerForParticipant = { openDrawerForParticipant }
                    overflowDrawer = { overflowDrawer }
                    participantActionEllipsisLabel = { participantActionEllipsisLabel }
                    participantIds = { sortedParticipantIds }
                    participantsCount = { participantsCount }
                    raiseContextId = { raiseContext.participantID }
                    toggleMenu = { toggleMenu }
                    youText = { youText } />
            </div>
            <MeetingParticipantContextMenu
                closeDrawer = { closeDrawer }
                drawerParticipant = { drawerParticipant }
                muteAudio = { muteAudio }
                onEnter = { menuEnter }
                onLeave = { menuLeave }
                onSelect = { lowerMenu }
                overflowDrawer = { overflowDrawer }
                { ...raiseContext } />
        </>
    );
}

/**
 * Maps (parts of) the redux state to the associated props for this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Object} ownProps - The own props of the component.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state): Object {
    const sortedParticipantIds = getSortedParticipantIds(state);

    // This is very important as getRemoteParticipants is not changing its reference object
    // and we will not re-render on change, but if count changes we will do
    const participantsCount = getParticipantCountWithFake(state);

    const showInviteButton = shouldRenderInviteButton(state) && isToolbarButtonEnabled('invite', state);

    const overflowDrawer = showOverflowDrawer(state);

    return {
        sortedParticipantIds,
        participantsCount,
        showInviteButton,
        overflowDrawer
    };
}

export default connect(_mapStateToProps)(MeetingParticipants);
