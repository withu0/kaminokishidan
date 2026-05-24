import { cn } from '@/lib/utils';

export function KnightLine({ className }: { className?: string }) {
    return <div className={cn('knight-line w-full opacity-50', className)} />;
}
