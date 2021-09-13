// @flow

import React, { PureComponent } from 'react';
import {
    FlatList,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import type { Dispatch } from 'redux';

import { getLocalParticipant, getParticipantCountWithFake } from '../../../base/participants';
import { connect } from '../../../base/redux';
import { setVisibleRemoteParticipants } from '../../actions.web';

import Thumbnail from './Thumbnail';
import styles from './styles';

/**
 * The type of the React {@link Component} props of {@link TileView}.
 */
type Props = {

    /**
     * Application's aspect ratio.
     */
    _aspectRatio: Symbol,

    /**
     * The number of columns.
     */
    _columns: number,

    /**
     * Application's viewport height.
     */
    _height: number,

    /**
     * The local participant.
     */
    _localParticipant: Object,

    /**
     * The number of participants in the conference.
     */
    _participantCount: number,

    /**
     * An array with the IDs of the remote participants in the conference.
     */
    _remoteParticipants: Array<string>,

    /**
     * The thumbnail height.
     */
    _thumbnailHeight: number,

    /**
     * Application's viewport height.
     */
    _width: number,

    /**
     * Invoked to update the receiver video quality.
     */
    dispatch: Dispatch<any>,

    /**
     * Callback to invoke when tile view is tapped.
     */
    onClick: Function
};

/**
 * An empty array. The purpose of the constant is to use the same reference every time we need an empty array.
 * This will prevent unnecessary re-renders.
 */
const EMPTY_ARRAY = [];

/**
 * Implements a React {@link PureComponent} which displays thumbnails in a two
 * dimensional grid.
 *
 * @extends PureComponent
 */
class TileView extends PureComponent<Props> {

    /**
     * The styles for the content container of the FlatList.
     */
    _contentContainerStyles: Object;

    /**
     * The styles for the FlatList.
     */
    _flatListStyles: Object;

    /**
     * The FlatList's viewabilityConfig.
     */
    _viewabilityConfig: Object;

    /**
     * Creates new TileView component.
     *
     * @param {Props} props - The props of the component.
     */
    constructor(props: Props) {
        super(props);

        this._keyExtractor = this._keyExtractor.bind(this);
        this._onViewableItemsChanged = this._onViewableItemsChanged.bind(this);
        this._renderThumbnail = this._renderThumbnail.bind(this);

        this._viewabilityConfig = {
            itemVisiblePercentThreshold: 30,
            minimumViewTime: 500
        };
        this._flatListStyles = {
            ...styles.flatListTileView
        };
        this._contentContainerStyles = {
            ...styles.contentContainer
        };
    }

    _keyExtractor: string => string;

    /**
     * Returns a key for a passed item of the list.
     *
     * @param {string} item - The user ID.
     * @returns {string} - The user ID.
     */
    _keyExtractor(item) {
        return item;
    }

    _onViewableItemsChanged: Object => void;

    /**
     * A handler for visible items changes.
     *
     * @param {Object} data - The visible items data.
     * @param {Array<Object>} data.viewableItems - The visible items array.
     * @returns {void}
     */
    _onViewableItemsChanged({ viewableItems = [] }: { viewableItems: Array<Object> }) {
        if (viewableItems[0]?.index === 0) {
            // Skip the local thumbnail.
            viewableItems.shift();
        }

        if (viewableItems.length === 0) {
            // User might be fast-scrolling, it will stabilize.
            return;
        }

        // We are off by one in the remote participants array.
        const startIndex = viewableItems[0].index - 1;
        const endIndex = viewableItems[viewableItems.length - 1].index - 1;

        this.props.dispatch(setVisibleRemoteParticipants(startIndex, endIndex));
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _columns, _height, _thumbnailHeight, _width, onClick } = this.props;
        const participants = this._getSortedParticipants();
        const initialRowsToRender = Math.ceil(_height / (_thumbnailHeight + (2 * styles.thumbnail.margin)));

        if (this._flatListStyles.minHeight !== _height || this._flatListStyles.minWidth !== _width) {
            this._flatListStyles = {
                ...styles.flatListTileView,
                minHeight: _height,
                minWidth: _width
            };
        }

        if (this._contentContainerStyles.minHeight !== _height || this._contentContainerStyles.minWidth !== _width) {
            this._contentContainerStyles = {
                ...styles.contentContainer,
                minHeight: _height,
                minWidth: _width
            };
        }

        return (
            <TouchableWithoutFeedback onPress = { onClick }>
                <View style = { styles.flatListContainer }>
                    <FlatList
                        bounces = { false }
                        contentContainerStyle = { this._contentContainerStyles }
                        data = { participants }
                        horizontal = { false }
                        initialNumToRender = { initialRowsToRender }
                        key = { _columns }
                        keyExtractor = { this._keyExtractor }
                        numColumns = { _columns }
                        onViewableItemsChanged = { this._onViewableItemsChanged }
                        renderItem = { this._renderThumbnail }
                        showsHorizontalScrollIndicator = { false }
                        showsVerticalScrollIndicator = { false }
                        style = { this._flatListStyles }
                        viewabilityConfig = { this._viewabilityConfig }
                        windowSize = { 2 } />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    /**
     * Returns all participants with the local participant at the end.
     *
     * @private
     * @returns {Participant[]}
     */
    _getSortedParticipants() {
        const { _localParticipant, _remoteParticipants } = this.props;

        if (!_localParticipant) {
            return EMPTY_ARRAY;
        }

        return [ _localParticipant?.id, ..._remoteParticipants ];
    }

    _renderThumbnail: Object => Object;

    /**
     * Creates React Element to display each participant in a thumbnail.
     *
     * @private
     * @returns {ReactElement}
     */
    _renderThumbnail({ item/* , index , separators */ }) {
        const { _thumbnailHeight } = this.props;

        return (
            <Thumbnail
                disableTint = { true }
                height = { _thumbnailHeight }
                key = { item }
                participantID = { item }
                renderDisplayName = { true }
                tileView = { true } />)
        ;
    }
}

/**
 * Maps (parts of) the redux state to the associated {@code TileView}'s props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state) {
    const responsiveUi = state['features/base/responsive-ui'];
    const { remoteParticipants, tileViewDimensions } = state['features/filmstrip'];
    const { height } = tileViewDimensions.thumbnailSize;
    const { columns } = tileViewDimensions;

    return {
        _aspectRatio: responsiveUi.aspectRatio,
        _columns: columns,
        _height: responsiveUi.clientHeight,
        _localParticipant: getLocalParticipant(state),
        _participantCount: getParticipantCountWithFake(state),
        _remoteParticipants: remoteParticipants,
        _thumbnailHeight: height,
        _width: responsiveUi.clientWidth
    };
}

export default connect(_mapStateToProps)(TileView);
