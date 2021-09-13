// @flow

import React from 'react';

import MeetingParticipantItem from './MeetingParticipantItem';

type Props = {

    /**
     * The translated ask unmute text for the qiuck action buttons.
     */
    askUnmuteText: string,

    /**
     * Callback for the mouse leaving this item
     */
    lowerMenu: Function,

    /**
     * Callback for the activation of this item's context menu
     */
    toggleMenu: Function,

    /**
     * Callback used to open a confirmation dialog for audio muting.
     */
    muteAudio: Function,

    /**
     * The translated text for the mute participant button.
     */
    muteParticipantButtonText: string,

    /**
     * The meeting participants.
     */
     participantIds: Array<string>,

    /**
     * Callback used to open an actions drawer for a participant.
     */
    openDrawerForParticipant: Function,

    /**
     * True if an overflow drawer should be displayed.
     */
    overflowDrawer: boolean,

    /**
     * The if of the participant for which the context menu should be open.
     */
    raiseContextId?: string,

    /**
     * The aria-label for the ellipsis action.
     */
    participantActionEllipsisLabel: string,

    /**
     * The translated "you" text.
     */
    youText: string
}

/**
 * Component used to display a list of meeting participants.
 *
 * @returns {ReactNode}
 */
function MeetingParticipantItems({
    askUnmuteText,
    lowerMenu,
    toggleMenu,
    muteAudio,
    muteParticipantButtonText,
    participantIds,
    openDrawerForParticipant,
    overflowDrawer,
    raiseContextId,
    participantActionEllipsisLabel,
    youText
}) {
    const renderParticipant = id => (
        <MeetingParticipantItem
            askUnmuteText = { askUnmuteText }
            isHighlighted = { raiseContextId === id }
            key = { id }
            muteAudio = { muteAudio }
            muteParticipantButtonText = { muteParticipantButtonText }
            onContextMenu = { toggleMenu(id) }
            onLeave = { lowerMenu }
            openDrawerForParticipant = { openDrawerForParticipant }
            overflowDrawer = { overflowDrawer }
            participantActionEllipsisLabel = { participantActionEllipsisLabel }
            participantID = { id }
            youText = { youText } />
    );

    return participantIds.map(renderParticipant);
}

// Memoize the component in order to avoid rerender on drawer open/close.
export default React.memo<Props>(MeetingParticipantItems);
