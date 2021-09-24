/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
/**
 * @deprecated
 */
export declare type NetInfoType = 'none' | 'cellular' | 'unknown' | 'wifi' | 'bluetooth' | 'ethernet' | 'wimax';
/**
 * @deprecated
 */
export declare type NetInfoEffectiveType = 'unknown' | '2g' | '3g' | '4g';
/**
 * @deprecated
 */
export interface NetInfoData {
    type: NetInfoType;
    effectiveType: NetInfoEffectiveType;
}
/**
 * @deprecated
 */
export declare const CHANGE_EVENT_NAME = "connectionChange";
/**
 * @deprecated
 */
export declare type ChangeEventName = 'connectionChange';
/**
 * @deprecated
 */
export declare type ChangeHandler = (data: NetInfoData) => void;
/**
 * @deprecated
 */
export declare type IsConnectedHandler = (isConnected: boolean) => void;
/**
 * @deprecated
 */
export interface Subscription {
    remove(): void;
}
/**
 * @deprecated
 */
export interface NativeInterface {
    getCurrentConnectivity: () => Promise<NetInfoData>;
    isConnectionMetered: () => Promise<boolean>;
}
