/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as DeprecatedTypes from './internal/deprecatedTypes';
import * as Types from './internal/types';
/**
 * Returns a `Promise` that resolves to a `NetInfoState` object.
 *
 * @returns A Promise which contains the current connection state.
 */
export declare function fetch(): Promise<Types.NetInfoState>;
/**
 * Subscribe to connection information. The callback is called with a parameter of type
 * [`NetInfoState`](README.md#netinfostate) whenever the connection state changes. Your listener
 * will be called with the latest information soon after you subscribe and then with any
 * subsequent changes afterwards. You should not assume that the listener is called in the same
 * way across devices or platforms.
 *
 * @param listener The listener which is called when the network state changes.
 *
 * @returns An ofunction which can be called to unsubscribe.
 */
export declare function addEventListener(listener: Types.NetInfoChangeHandler): Types.NetInfoSubscription;
/**
 * Deprecated network state listener. You should remove the event name and change your handler to
 * use the new state shape.
 *
 * @deprecated
 *
 * @param type The event type.
 * @param deprecatedHandler The listener.
 *
 * @returns An object with a remove function which can be called to unsubscribe.
 */
export declare function addEventListener(type: string, deprecatedHandler: DeprecatedTypes.ChangeHandler): DeprecatedTypes.Subscription;
/**
 * A React Hook which updates when the connection state changes.
 *
 * @returns The connection state.
 */
export declare function useNetInfo(): Types.NetInfoState;
/**
 * Deprecated method to remove the listener. You should upgrade to the new API.
 *
 * @deprecated
 *
 * @param type The event type.
 * @param handler The event listener.
 */
export declare function removeEventListener(type: string, handler: DeprecatedTypes.ChangeHandler): void;
/**
 * Deprecated method to get the current state. You should upgrade to the new `fetch` method and
 * handle the new state type.
 *
 * @deprecated
 */
export declare function getConnectionInfo(): Promise<DeprecatedTypes.NetInfoData>;
/**
 * Deprecated method to tell if the current connection is "expensive". Only available on Android.
 * You should now call the `fetch` method and look at the `details.isConnectionExpensive` property.
 *
 * @deprecated
 */
export declare function isConnectionExpensive(): Promise<boolean>;
export declare const isConnected: {
    /**
     * Deprecated method to listen for changes to the connected boolean. You should now use the
     * normal `addEventListener` method and look at the `isConnected` property.
     *
     * @deprecated
     */
    addEventListener: (eventName: string, handler: DeprecatedTypes.IsConnectedHandler) => DeprecatedTypes.Subscription;
    /**
     * Deprecated method to stop listening for changes to the connected boolean. You should now use
     * the normal `addEventListener` method and look at the `isConnected` property.
     *
     * @deprecated
     */
    removeEventListener: (_eventName: string, handler: DeprecatedTypes.IsConnectedHandler) => void;
    /**
     * Deprecated method to get the current is connected boolean. You should now use the normal
     * `fetch` method and look at the `isConnected` property.
     *
     * @deprecated
     */
    fetch: () => Promise<boolean>;
};
export * from './internal/types';
export * from './internal/deprecatedTypes';
declare const _default: {
    fetch: typeof fetch;
    addEventListener: typeof addEventListener;
    useNetInfo: typeof useNetInfo;
    removeEventListener: typeof removeEventListener;
    getConnectionInfo: typeof getConnectionInfo;
    isConnectionExpensive: typeof isConnectionExpensive;
    isConnected: {
        /**
         * Deprecated method to listen for changes to the connected boolean. You should now use the
         * normal `addEventListener` method and look at the `isConnected` property.
         *
         * @deprecated
         */
        addEventListener: (eventName: string, handler: DeprecatedTypes.IsConnectedHandler) => DeprecatedTypes.Subscription;
        /**
         * Deprecated method to stop listening for changes to the connected boolean. You should now use
         * the normal `addEventListener` method and look at the `isConnected` property.
         *
         * @deprecated
         */
        removeEventListener: (_eventName: string, handler: DeprecatedTypes.IsConnectedHandler) => void;
        /**
         * Deprecated method to get the current is connected boolean. You should now use the normal
         * `fetch` method and look at the `isConnected` property.
         *
         * @deprecated
         */
        fetch: () => Promise<boolean>;
    };
};
export default _default;
