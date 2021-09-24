import { Component, ComponentType } from 'react';
import { ButtonProps } from '@atlaskit/button/types';
import { ActionsType, AppearanceTypes } from '../../types';
declare type Props = {
    appearance: AppearanceTypes;
    actions: ActionsType;
    linkComponent?: ComponentType<ButtonProps>;
};
export default class FlagActions extends Component<Props, {}> {
    static defaultProps: {
        appearance: AppearanceTypes;
        actions: never[];
    };
    getUniqueId: (prefix: string) => string;
    render(): JSX.Element | null;
}
export {};
