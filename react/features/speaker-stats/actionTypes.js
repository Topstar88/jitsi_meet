// @flow

/**
 * Action type to start search.
 *
 * {
 *     type: INIT_SEARCH
 * }
 */
export const INIT_SEARCH = 'INIT_SEARCH';

/**
 * Action type to start stats retrieval.
 *
 * {
 *     type: INIT_UPDATE_STATS,
 *     getSpeakerStats: Function
 * }
 */
export const INIT_UPDATE_STATS = 'INIT_UPDATE_STATS';

/**
 * Action type to update stats.
 *
 * {
 *     type: UPDATE_STATS,
 *     stats: Object
 * }
 */
export const UPDATE_STATS = 'UPDATE_STATS';

/**
 * Action type to initiate reordering of the stats.
 *
 * {
 *     type: INIT_REORDER_STATS
 * }
 */
export const INIT_REORDER_STATS = 'INIT_REORDER_STATS';
