import { SITE_ROUTES } from '@/config/site-navigation';
import { Link } from '@inertiajs/react';

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-kog-primary/10 bg-kog-surface">
            <div className="mx-auto flex h-16 items-center justify-center px-6 lg:h-18">
                <Link
                    href={SITE_ROUTES.home}
                    className="flex items-center gap-3 text-kog-primary transition-opacity hover:opacity-90 active:opacity-80"
                    aria-label="株式会社神の騎士団 — ホーム"
                >
                    <img
                        src="/favicon-96x96.png"
                        alt=""
                        width={40}
                        height={40}
                        className="h-9 w-9 shrink-0 object-contain lg:h-10 lg:w-10"
                        aria-hidden
                    />
                    <div className="flex flex-col items-start gap-0.5 leading-none">

                        <span className="font-['Noto_Serif_JP',serif] text-[0.95rem] font-medium tracking-wide md:text-base lg:text-lg">
                            株式会社神の騎士団
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    );
}
