import { VoidFunctionComponent } from 'react';
import { IFlags, IUiConfig } from 'interfaces/uiConfig';

export interface IRoute {
    path: string;
    title: string;
    type: 'protected' | 'unprotected';
    layout?: string;
    parent?: string;
    flag?: keyof IFlags;
    configFlag?: keyof IUiConfig;
    hidden?: boolean;
    enterprise?: boolean;
    component: VoidFunctionComponent;
    menu: IRouteMenu;
    isStandalone?: boolean;
}

export interface INavigationMenuItem {
    path: string;
    title: string;
    menu: IRouteMenu;
    flag?: keyof IFlags;
    configFlag?: keyof IUiConfig;
    group?: string;
}

interface IRouteMenu {
    mobile?: boolean;
    advanced?: boolean;
    adminSettings?: boolean;
    mode?: Array<'pro' | 'enterprise'>;
    showEnterpriseBadge?: boolean;
}
