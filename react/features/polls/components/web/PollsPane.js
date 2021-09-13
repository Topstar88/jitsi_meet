// @flow

import React from 'react';

import AbstractPollsPane from '../AbstractPollsPane';
import type { AbstractProps } from '../AbstractPollsPane';

import PollsList from './PollsList';

import { PollCreate } from '.';

const PollsPane = (props: AbstractProps) => {

    const { createMode, onCreate, setCreateMode, t } = props;

    return createMode
        ? <PollCreate setCreateMode = { setCreateMode } />
        : <div className = 'polls-pane-content'>
            <div className = { 'poll-container' } >
                <PollsList />
            </div>
            <div className = { 'poll-footer' }>
                <button
                    aria-label = { t('polls.create.create') }
                    className = { 'poll-primary-button' }
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick = { onCreate } >
                    <span>{t('polls.create.create')}</span>
                </button>
            </div>
        </div>;
};

/*
 * We apply AbstractPollsPane to fill in the AbstractProps common
 * to both the web and native implementations.
 */
// eslint-disable-next-line new-cap
export default AbstractPollsPane(PollsPane);
