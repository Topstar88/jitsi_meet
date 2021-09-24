import React from 'react';
export interface WithContextProps {
    analyticsContext?: Record<string, any>;
}
declare const withAnalyticsContext: (defaultData?: any) => <Props, Component>(WrappedComponent: (((props: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null) & Component) | ((new (props: Props) => React.Component<Props, any, any>) & Component)) => React.ForwardRefExoticComponent<React.PropsWithoutRef<JSX.LibraryManagedAttributes<Component, Props & WithContextProps>> & React.RefAttributes<any>>;
export default withAnalyticsContext;
