// @flow

import { translate } from '../../base/i18n';
import { IconMessage, IconReply } from '../../base/icons';
import { getParticipantById } from '../../base/participants';
import { connect } from '../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../base/toolbox/components';
import { setPrivateMessageRecipient } from '../actions';

export type Props = AbstractButtonProps & {

    /**
     * The ID of the participant that the message is to be sent.
     */
    participantID: string,

    /**
     * True if the button is rendered as a reply button.
     */
    reply: boolean,

    /**
     * Function to be used to translate i18n labels.
     */
    t: Function,

    /**
     * The participant object retreived from Redux.
     */
    _participant: Object,

    /**
     * Function to dispatch the result of the participant selection to send a private message.
     */
    _setPrivateMessageRecipient: Function
};

/**
 * Class to render a button that initiates the sending of a private message through chet.
 */
class PrivateMessageButton extends AbstractButton<Props, any> {
    accessibilityLabel = 'toolbar.accessibilityLabel.privateMessage';
    icon = IconMessage;
    label = 'toolbar.privateMessage';
    toggledIcon = IconReply;

    /**
     * Handles clicking / pressing the button, and kicks the participant.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        const { _participant, _setPrivateMessageRecipient } = this.props;

        _setPrivateMessageRecipient(_participant);
    }

    /**
     * Helper function to be implemented by subclasses, which must return a
     * {@code boolean} value indicating if this button is toggled or not.
     *
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props.reply;
    }

}

/**
 * Maps part of the props of this component to Redux actions.
 *
 * @param {Function} dispatch - The Redux dispatch function.
 * @returns {Props}
 */
export function _mapDispatchToProps(dispatch: Function): $Shape<Props> {
    return {
        _setPrivateMessageRecipient: participant => {
            dispatch(setPrivateMessageRecipient(participant));
        }
    };
}

/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Props} ownProps - The own props of the component.
 * @returns {Props}
 */
export function _mapStateToProps(state: Object, ownProps: Props): $Shape<Props> {
    return {
        _participant: getParticipantById(state, ownProps.participantID)
    };
}

export default translate(connect(_mapStateToProps, _mapDispatchToProps)(PrivateMessageButton));
