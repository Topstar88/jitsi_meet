/* @flow */

import { parseURLParams } from '../util';

/**
 * Retrieves the JSON Web Token (JWT), if any, defined by a specific
 * {@link URL}.
 *
 * @param {URL} url - The {@code URL} to parse and retrieve the JSON Web Token
 * (JWT), if any, from.
 * @returns {string} The JSON Web Token (JWT), if any, defined by the specified
 * {@code url}; otherwise, {@code undefined}.
 */
export function parseJWTFromURLParams(url: URL = window.location) {
    return parseURLParams(url, true, 'search').jwt;
}

/**
 * Returns the user name after decoding the jwt.
 *
 * @param {Object} state - The app state.
 * @returns {string}
 */
export function getJwtName(state: Object) {
    const { user } = state['features/base/jwt'];

    return user?.name || '';
}
