import { KnightLine } from '@/components/site/knight-line';
import { SITE_ROUTES } from '@/config/site-navigation';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

type SiteFooterProps = {
    className?: string;
};

function scrollToFv() {
    document.getElementById('fv')?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', SITE_ROUTES.homeFv);
}

export function SiteFooter({ className }: SiteFooterProps) {
    const isHome = () => {
        const path = window.location.pathname;
        return path === '/' || path === '';
    };

    return (
        <footer
            className={cn(
                'border-t border-kog-primary/20 bg-kog-surface px-6 py-12 text-center lg:py-16',
                className,
            )}
        >
            <div className="mx-auto max-w-7xl space-y-6">
                <Link
                    href={SITE_ROUTES.homeFv}
                    className="inline-block text-kog-primary transition-opacity hover:opacity-90 active:opacity-80"
                    aria-label="株式会社神の騎士団 — トップへ"
                    onClick={(event) => {
                        if (!isHome()) {
                            return;
                        }

                        event.preventDefault();
                        scrollToFv();
                    }}
                    onFinish={() => {
                        if (window.location.hash === '#fv') {
                            scrollToFv();
                        }
                    }}
                >
                    <div className="font-['Noto_Serif_JP',serif] text-lg font-medium tracking-wide lg:text-xl">
                        株式会社神の騎士団
                    </div>
                </Link>
                <KnightLine className="mx-auto max-w-xs opacity-30" />
                <p className="text-[10px] tracking-widest text-kog-outline uppercase lg:text-xs">
                    © 2026 Order of the Divine Knights Co., Ltd. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
}
