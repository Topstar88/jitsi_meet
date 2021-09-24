/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as DeprecatedTypes from './deprecatedTypes';
import * as Types from './types';
/**
 * Convert the NetInfoState to the deprecated NetInfoData type.
 *
 * @param input The current NetInfoState to convert.
 */
export declare function convertState(input: Types.NetInfoState): DeprecatedTypes.NetInfoData;
/**
 * Decide the the given NetInfoState describes an expensive connection.
 *
 * @param input The current NetInfoState to decide if the connection is expensive.
 */
export declare function isConnectionExpensive(input: Types.NetInfoState): boolean;
/**
 * Decide the the given NetInfoState describes an active connection.
 *
 * @param input The current NetInfoState to decide if the connection is active.
 */
export declare function isConnected(input: Types.NetInfoState): boolean;
export declare function warnOnce(): void;
declare const _default: {
    convertState: typeof convertState;
    isConnectionExpensive: typeof isConnectionExpensive;
    isConnected: typeof isConnected;
    warnOnce: typeof warnOnce;
};
export default _default;
