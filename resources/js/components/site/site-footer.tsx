import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
    { href: '#', label: 'プライバシーポリシー' },
    { href: '#', label: '利用規約' },
    { href: '#', label: '特定商取引法に基づく表記' },
    { href: '#', label: '公式SNS' },
] as const;

type SiteFooterProps = {
    variant?: 'simple' | 'extended';
    className?: string;
};

export function SiteFooter({ variant = 'simple', className }: SiteFooterProps) {
    if (variant === 'simple') {
        return (
            <footer
                className={cn(
                    'bg-kog-surface px-6 py-12 text-center lg:py-16',
                    className,
                )}
            >
                <div className="mx-auto max-w-7xl space-y-6">
                    <div className="font-kog-headline text-lg font-bold tracking-widest text-kog-primary">
                        株式会社神の騎士団
                    </div>
                    <p className="text-[10px] tracking-widest text-kog-outline uppercase lg:text-xs">
                        © 2024 Order of the Divine Knights Co., Ltd. All
                        Rights Reserved.
                    </p>
                </div>
            </footer>
        );
    }

    return (
        <footer
            className={cn(
                'flex w-full flex-col items-center gap-8 border-t border-kog-primary/20 bg-kog-surface px-8 py-16',
                className,
            )}
        >
            <div className="mb-4 font-kog-headline text-xl font-bold tracking-widest text-kog-primary uppercase">
                株式会社神の騎士団
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-12">
                {FOOTER_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="font-kog-headline text-sm tracking-widest text-kog-secondary/60 transition-all hover:translate-x-1 hover:text-kog-primary"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <p className="mt-8 font-kog-body text-[10px] tracking-[0.4em] text-kog-secondary/40 uppercase">
                © THE SOVEREIGN ORDER. ALL RIGHTS RESERVED.
            </p>
        </footer>
    );
}
