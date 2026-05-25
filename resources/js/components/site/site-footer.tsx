import { KnightLine } from '@/components/site/knight-line';
import { cn } from '@/lib/utils';

type SiteFooterProps = {
    className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
    return (
        <footer
            className={cn(
                'border-t border-kog-primary/20 bg-kog-surface px-6 py-12 text-center lg:py-16',
                className,
            )}
        >
            <div className="mx-auto max-w-7xl space-y-6">
                <div className="font-kog-headline text-lg font-bold tracking-widest text-kog-primary lg:text-xl">
                    株式会社神の騎士団
                </div>
                <KnightLine className="mx-auto max-w-xs opacity-30" />
                <p className="text-[10px] tracking-widest text-kog-outline uppercase lg:text-xs">
                    © 2026 Order of the Divine Knights Co., Ltd. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
}
