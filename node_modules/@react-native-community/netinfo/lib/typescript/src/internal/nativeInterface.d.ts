/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import { NativeEventEmitter } from 'react-native';
declare const _default: {
    eventEmitter: NativeEventEmitter;
    getCurrentState: () => Promise<import("./privateTypes").NetInfoNativeModuleState>;
    addListener: (type: string, handler: Function) => void;
    removeListeners: (type: string, handler: Function) => void;
};
export default _default;
