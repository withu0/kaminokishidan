export const SITE_ROUTES = {
    home: '/',
    homeFv: '/#fv',
    business: '/business',
    company: '/company',
    recruitment: '/recruitment',
    admission: '/admission',
    admissionPledge: '/admission/pledge',
    admissionPledgeAccepted: '/admission/pledge/accepted',
    oath: '/oath',
    members: '/members',
} as const;

export type SiteNavKey = keyof typeof SITE_ROUTES;

/** Primary navigation — used in header (desktop + mobile drawer) and bottom bar */
export const BOTTOM_NAV_ITEMS = [
    {
        key: 'home' as const,
        href: SITE_ROUTES.home,
        label: 'ホーム',
        icon: 'home',
    },
    {
        key: 'business' as const,
        href: SITE_ROUTES.business,
        label: '事業案内',
        icon: 'business_center',
    },
    {
        key: 'company' as const,
        href: SITE_ROUTES.company,
        label: '会社概要',
        icon: 'account_balance',
    },
    {
        key: 'recruitment' as const,
        href: SITE_ROUTES.recruitment,
        label: '採用',
        icon: 'group_add',
    },
] as const;

export function isNavActive(href: string, url: string): boolean {
    if (href === '#') {
        return false;
    }

    const path = url.split('?')[0];

    if (href === '/') {
        return path === '/' || path === '';
    }

    return path === href || path.startsWith(`${href}/`);
}

export function getContactHref(url: string): string {
    const path = url.split('?')[0];

    return path === SITE_ROUTES.recruitment ||
        path.startsWith(`${SITE_ROUTES.recruitment}/`)
        ? '#contact'
        : `${SITE_ROUTES.recruitment}#contact`;
}
