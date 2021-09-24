/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as PrivateTypes from './privateTypes';
import * as Types from './types';
export declare function convertState(input: PrivateTypes.NetInfoNativeModuleState): Types.NetInfoState;
export declare function currentState(): Promise<PrivateTypes.NetInfoNativeModuleState>;
declare const _default: {
    convertState: typeof convertState;
    currentState: typeof currentState;
};
export default _default;
