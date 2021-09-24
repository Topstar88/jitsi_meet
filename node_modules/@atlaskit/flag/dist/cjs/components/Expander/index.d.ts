import { Component, ReactNode } from 'react';
declare type Props = {
    children?: ReactNode;
    isExpanded?: boolean;
};
declare type State = {
    isAnimating: boolean;
};
export default class Expander extends Component<Props, State> {
    static defaultProps: {
        isExpanded: boolean;
    };
    state: {
        isAnimating: boolean;
    };
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    handleTransitionEnd: () => void;
    render(): JSX.Element;
}
export {};
