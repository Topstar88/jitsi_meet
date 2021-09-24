import { Component } from 'react';
import { AutoDismissFlagProps } from '../../types';
export declare const AUTO_DISMISS_SECONDS = 8;
export default class AutoDismissFlag extends Component<AutoDismissFlagProps, {}> {
    autoDismissTimer?: number | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: AutoDismissFlagProps): void;
    startAutoDismissTimer: () => void;
    stopAutoDismissTimer: () => void;
    dismissFlag: () => void;
    handleAutoDismissTimerEnd: () => void;
    handleInteractionStart: () => void;
    isAutoDismissAllowed: () => false | import("../../types").FunctionType | undefined;
    handleInteractionEnd: () => void;
    render(): JSX.Element;
}
