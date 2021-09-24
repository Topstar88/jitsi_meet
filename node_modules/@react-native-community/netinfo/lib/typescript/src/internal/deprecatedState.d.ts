/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as DeprecatedTypes from './deprecatedTypes';
export declare function setup(): void;
export declare function tearDown(): void;
export declare function latest(): Promise<DeprecatedTypes.NetInfoData>;
export declare function add(handler: DeprecatedTypes.ChangeHandler): void;
export declare function remove(handler: DeprecatedTypes.ChangeHandler): void;
declare const _default: {
    setup: typeof setup;
    tearDown: typeof tearDown;
    latest: typeof latest;
    add: typeof add;
    remove: typeof remove;
};
export default _default;
