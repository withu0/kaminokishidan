import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

type KnightsHeadProps = {
    title: string;
    children?: ReactNode;
};

export function KnightsHead({ title, children }: KnightsHeadProps) {
    return (
        <Head title={title}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&family=Noto+Serif+JP:wght@500;600&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
                rel="stylesheet"
            />
            {children}
        </Head>
    );
}
