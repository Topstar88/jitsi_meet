// @flow

import {
    ANDROID_SCREENSHARING_ENABLED,
    getFeatureFlag
} from '../../../base/flags';
import { translate } from '../../../base/i18n';
import { IconShareDesktop } from '../../../base/icons';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';
import { toggleScreensharing, isLocalVideoTrackDesktop } from '../../../base/tracks';

/**
 * The type of the React {@code Component} props of {@link ScreenSharingAndroidButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * True if the button needs to be disabled.
     */
    _disabled: boolean,

    /**
     * Whether video is currently muted or not.
     */
    _screensharing: boolean,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function
};

/**
 * An implementation of a button for toggling screen sharing.
 */
class ScreenSharingAndroidButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.shareYourScreen';
    icon = IconShareDesktop;
    label = 'toolbar.startScreenSharing';
    toggledLabel = 'toolbar.stopScreenSharing';

    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        const enable = !this._isToggled();

        this.props.dispatch(toggleScreensharing(enable));
    }

    /**
     * Returns a boolean value indicating if this button is disabled or not.
     *
     * @protected
     * @returns {boolean}
     */
    _isDisabled() {
        return this.props._disabled;
    }

    /**
     * Indicates whether this button is in toggled state or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props._screensharing;
    }
}

/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code ToggleCameraButton} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _screensharing: boolean
 * }}
 */
function _mapStateToProps(state): Object {
    const enabled = getFeatureFlag(state, ANDROID_SCREENSHARING_ENABLED, true);

    return {
        _screensharing: isLocalVideoTrackDesktop(state),
        visible: enabled
    };
}

export default translate(connect(_mapStateToProps)(ScreenSharingAndroidButton));
