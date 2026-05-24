import { BOTTOM_NAV_ITEMS, isNavActive } from '@/config/site-navigation';
import { Link, usePage } from '@inertiajs/react';

export function SiteBottomNav() {
    const { url } = usePage();

    return (
        <nav
            className="fixed right-0 bottom-0 left-0 z-50 border-t border-kog-primary/20 bg-kog-surface/90 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:hidden"
            aria-label="モバイルナビゲーション"
        >
            <div className="flex h-20 items-center justify-around px-4 pb-[env(safe-area-inset-bottom)]">
                {BOTTOM_NAV_ITEMS.map((item) => {
                    const active = isNavActive(item.href, url);

                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={
                                active
                                    ? 'flex scale-110 flex-col items-center justify-center text-kog-primary brightness-110 transition-all duration-500 ease-out'
                                    : 'flex flex-col items-center justify-center text-kog-secondary opacity-60 transition-all duration-500 hover:text-kog-primary hover:opacity-100'
                            }
                        >
                            <span className="material-symbols-outlined">
                                {item.icon}
                            </span>
                            <span className="mt-1 font-kog-body text-[10px] tracking-tighter uppercase">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
