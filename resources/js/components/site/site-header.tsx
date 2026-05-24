import {
    BOTTOM_NAV_ITEMS,
    DESKTOP_SUBPAGE_NAV,
    isNavActive,
    isSubpage,
    SITE_ROUTES,
} from '@/config/site-navigation';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();
    const subpage = isSubpage(url);
    const contactHref = url.includes('/recruitment')
        ? '#contact'
        : `${SITE_ROUTES.recruitment}#contact`;

    const navLinkClass = (href: string, activeClass: string) =>
        isNavActive(href, url)
            ? activeClass
            : 'text-kog-secondary transition-colors hover:text-kog-primary';

    return (
        <header className="fixed top-0 z-50 w-full border-b border-kog-primary/15 bg-kog-surface/80 shadow-2xl shadow-black/50 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:h-20 lg:px-10">
                <button
                    type="button"
                    className={`text-kog-primary transition-transform active:scale-95 ${subpage ? 'md:hidden' : 'lg:hidden'}`}
                    aria-expanded={menuOpen}
                    aria-label="メニューを開く"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>

                <Link
                    href={SITE_ROUTES.home}
                    className="font-kog-headline text-lg font-bold tracking-tighter text-kog-primary lg:text-2xl"
                >
                    株式会社神の騎士団
                </Link>

                {subpage ? (
                    <nav
                        className="hidden items-center gap-6 md:flex lg:gap-10"
                        aria-label="メインナビゲーション"
                    >
                        {DESKTOP_SUBPAGE_NAV.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`font-kog-headline text-sm tracking-[0.05em] uppercase ${navLinkClass(
                                    item.href,
                                    'border-b-2 border-kog-primary pb-1 text-kog-primary',
                                )}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={contactHref}
                            className="bg-kog-primary px-6 py-2 font-bold text-kog-on-primary transition-transform duration-300 hover:scale-105 active:scale-95"
                        >
                            お問い合わせ
                        </a>
                    </nav>
                ) : (
                    <nav
                        className="hidden items-center gap-8 lg:flex"
                        aria-label="メインナビゲーション"
                    >
                        {BOTTOM_NAV_ITEMS.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`font-kog-body text-sm font-semibold tracking-widest uppercase ${navLinkClass(
                                    item.href,
                                    'text-kog-primary',
                                )}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}

                <div
                    className={`w-6 ${subpage ? 'md:hidden' : 'lg:hidden'}`}
                    aria-hidden
                />
            </div>

            {menuOpen && (
                <nav
                    className={`border-t border-kog-primary/10 bg-kog-surface-container-low ${subpage ? 'md:hidden' : 'lg:hidden'}`}
                    aria-label="モバイルメニュー"
                >
                    <ul className="flex flex-col px-6 py-4">
                        {(subpage ? DESKTOP_SUBPAGE_NAV : BOTTOM_NAV_ITEMS).map(
                            (item) => (
                                <li key={item.key}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 py-3 transition-colors ${
                                            isNavActive(item.href, url)
                                                ? 'text-kog-primary'
                                                : 'text-kog-secondary hover:text-kog-primary'
                                        }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {'icon' in item && (
                                            <span className="material-symbols-outlined text-kog-primary">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span className="text-sm font-semibold tracking-widest uppercase">
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ),
                        )}
                        {subpage && (
                            <li>
                                <a
                                    href={contactHref}
                                    className="flex items-center gap-3 py-3 font-bold text-kog-primary"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    お問い合わせ
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
}
