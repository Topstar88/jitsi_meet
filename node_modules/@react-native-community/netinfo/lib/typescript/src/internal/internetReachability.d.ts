/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as PrivateTypes from './privateTypes';
export declare function clear(): void;
export declare function update(state: PrivateTypes.NetInfoNativeModuleState): void;
export declare function currentState(): boolean | null;
export declare function addSubscription(listener: PrivateTypes.NetInfoInternetReachabilityChangeListener): () => void;
declare const _default: {
    update: typeof update;
    currentState: typeof currentState;
    clear: typeof clear;
    addSubscription: typeof addSubscription;
};
export default _default;
