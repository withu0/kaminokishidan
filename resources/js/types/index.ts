export type * from './auth';
export type * from './navigation';
export type * from './ui';

import type { Auth } from './auth';

export type SiteMeta = {
    name: string;
    short_name: string;
    description: string;
    theme_color: string;
    og_image: string;
};

export type SharedData = {
    name: string;
    appUrl: string;
    site: SiteMeta;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};
