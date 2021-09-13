// @flow


export type Props = {

    /**
     * Custom e2ee labels.
     */
    _e2eeLabels?: Object;

    /**
     * True if the label needs to be rendered, false otherwise.
     */
    _showLabel: boolean,

    /**
     * Invoked to obtain translated strings.
     */
    t: Function
};

/**
 * Maps (parts of) the redux state to the associated props of this {@code Component}.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {Props}
 */
export function _mapStateToProps(state: Object) {
    return {
        _e2eeLabels: state['features/base/config'].e2eeLabels,
        _showLabel: state['features/e2ee'].everyoneEnabledE2EE
    };
}
