/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as Types from './types';
export declare function setup(): void;
export declare function tearDown(): void;
export declare function latest(): Promise<Types.NetInfoState>;
export declare function add(handler: Types.NetInfoChangeHandler): void;
export declare function remove(handler: Types.NetInfoChangeHandler): void;
declare const _default: {
    setup: typeof setup;
    tearDown: typeof tearDown;
    latest: typeof latest;
    add: typeof add;
    remove: typeof remove;
};
export default _default;
