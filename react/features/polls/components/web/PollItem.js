// @flow

import React from 'react';
import { useSelector } from 'react-redux';

import { PollAnswer, PollResults } from '..';
import { shouldShowResults } from '../../functions';


type Props = {

    /**
     * Id of the poll
     */
    pollId: string,

}

const PollItem = React.forwardRef<Props, HTMLElement>(({ pollId }, ref) => {
    const showResults = useSelector(state => shouldShowResults(state, pollId));

    return (
        <div ref = { ref }>
            { showResults
                ? <PollResults
                    key = { pollId }
                    pollId = { pollId } />
                : <PollAnswer
                    pollId = { pollId } />
            }

        </div>
    );
});

export default PollItem;
