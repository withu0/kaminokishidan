import type { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

type KnightsHeadProps = {
    title: string;
    description?: string;
    children?: ReactNode;
};

function absoluteUrl(baseUrl: string, path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function KnightsHead({ title, description, children }: KnightsHeadProps) {
    const { props, url } = usePage<SharedData>();
    const { appUrl, site } = props;
    const metaDescription = description ?? site.description;
    const pageUrl = absoluteUrl(appUrl, url);
    const ogImage = absoluteUrl(appUrl, site.og_image);

    return (
        <Head title={title}>
            <meta head-key="description" name="description" content={metaDescription} />
            <meta head-key="og:type" property="og:type" content="website" />
            <meta head-key="og:locale" property="og:locale" content="ja_JP" />
            <meta head-key="og:site_name" property="og:site_name" content={site.name} />
            <meta head-key="og:title" property="og:title" content={title} />
            <meta
                head-key="og:description"
                property="og:description"
                content={metaDescription}
            />
            <meta head-key="og:url" property="og:url" content={pageUrl} />
            <meta head-key="og:image" property="og:image" content={ogImage} />
            <meta
                head-key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta head-key="twitter:title" name="twitter:title" content={title} />
            <meta
                head-key="twitter:description"
                name="twitter:description"
                content={metaDescription}
            />
            <meta head-key="twitter:image" name="twitter:image" content={ogImage} />
            <link rel="canonical" href={pageUrl} head-key="canonical" />
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
