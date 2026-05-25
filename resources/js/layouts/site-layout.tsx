import { SiteBottomNav } from '@/components/site/site-bottom-nav';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { useEffect, type ReactNode } from 'react';

type SiteLayoutProps = {
    children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';

        return () => {
            const stored = localStorage.getItem('appearance') ?? 'system';
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            const isDark =
                stored === 'dark' || (stored === 'system' && prefersDark);
            document.documentElement.classList.toggle('dark', isDark);
            document.documentElement.style.colorScheme = isDark
                ? 'dark'
                : 'light';
        };
    }, []);

    return (
        <div className="knights-site min-h-dvh overflow-x-hidden bg-kog-background font-kog-body text-kog-on-surface">
            <SiteHeader />
            <main className="pt-16 pb-20 lg:pb-0">{children}</main>
            <SiteFooter />
            <SiteBottomNav />
        </div>
    );
}
