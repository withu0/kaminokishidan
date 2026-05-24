export const SITE_ROUTES = {
    home: '/',
    business: '/business',
    company: '/company',
    recruitment: '/recruitment',
    admission: '/admission',
    oath: '/oath',
    members: '/members',
} as const;

export type SiteNavKey = keyof typeof SITE_ROUTES | 'business';

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

export const DESKTOP_SUBPAGE_NAV = [
    { key: 'business' as const, href: SITE_ROUTES.business, label: '事業案内' },
    { key: 'company' as const, href: SITE_ROUTES.company, label: '会社概要' },
    {
        key: 'recruitment' as const,
        href: SITE_ROUTES.recruitment,
        label: '採用情報',
    },
] as const;

const SUBPAGE_PATHS = [
    SITE_ROUTES.business,
    SITE_ROUTES.company,
    SITE_ROUTES.recruitment,
    SITE_ROUTES.admission,
    SITE_ROUTES.oath,
    SITE_ROUTES.members,
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

export function isSubpage(url: string): boolean {
    const path = url.split('?')[0];

    return SUBPAGE_PATHS.some(
        (route) => path === route || path.startsWith(`${route}/`),
    );
}
