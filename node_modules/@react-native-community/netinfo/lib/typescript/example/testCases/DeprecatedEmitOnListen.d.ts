/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as React from 'react';
interface State {
    triggered: boolean;
}
export default class DeprecatedEmitOnListen extends React.Component<{}, State> {
    constructor(props: {});
    componentWillUnmount(): void;
    _onPress: () => void;
    _handleConnectionChange: () => void;
    render(): JSX.Element;
}
export {};
