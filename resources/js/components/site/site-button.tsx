import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const siteButtonVariants = cva(
    'inline-flex items-center justify-center text-center font-kog-headline font-bold uppercase tracking-[0.2em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60',
    {
        variants: {
            variant: {
                primary:
                    'group relative overflow-hidden bg-kog-primary text-kog-on-primary shadow-[0_0_20px_rgba(233,195,73,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(233,195,73,0.4)] active:scale-95',
                outline:
                    'border border-kog-outline text-kog-on-surface hover:scale-105 hover:bg-kog-surface-container-low active:scale-95',
                outlineHero:
                    'border-2 border-kog-primary bg-kog-primary text-lg font-bold normal-case italic text-kog-on-primary hover:bg-transparent hover:text-kog-primary',
                inverse:
                    'bg-kog-surface text-kog-on-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95',
            },
            size: {
                sm: 'px-10 py-4 text-sm',
                md: 'px-12 py-4 text-base',
                lg: 'px-8 py-4 text-base lg:px-12 lg:py-5 lg:text-lg',
                xl: 'px-16 py-6 text-xl',
                full: 'w-full py-5 text-base sm:mx-auto sm:max-w-md lg:max-w-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    },
);

function SiteButton({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof siteButtonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="site-button"
            className={cn(siteButtonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { SiteButton, siteButtonVariants };
