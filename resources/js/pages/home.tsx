import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteButton } from '@/components/site/site-button';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { useEffect } from 'react';

const DOMAINS = [
    {
        label: 'DOMAIN I',
        title: '聖域都市開発',
        description:
            '美学と機能が融合する、次世代の居住区を建築。静寂と威厳に満ちた空間を提供します。',
        image: KNIGHTS_IMAGES.domainUrban,
        alt: '夕暮れのモダンな高層ビルが暗い空に映える建築写真',
    },
    {
        label: 'DOMAIN II',
        title: '鉄壁の資産防衛',
        description:
            '最先端技術と伝統的な智慧を融合。あらゆる脅威から聖なる資産を守り抜きます。',
        image: KNIGHTS_IMAGES.domainSecurity,
        alt: '未来的なデータセンター通路に青と金のサーバー光が並ぶ写真',
    },
    {
        label: 'DOMAIN III',
        title: '叡智の継承',
        description:
            '次代の指導者を育成するアカデミー。騎士道精神を核とした卓越した知性を授けます。',
        image: KNIGHTS_IMAGES.domainWisdom,
        alt: '高級会議室でのビジネスミーティングの様子',
    },
] as const;

export default function Home() {
    useEffect(() => {
        if (window.location.hash !== '#fv') {
            return;
        }

        document.getElementById('fv')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <SiteLayout>
            <KnightsHead title="株式会社神の騎士団" />

            {/* Hero */}
            <section
                id="fv"
                className="relative flex min-h-[min(795px,90dvh)] flex-col items-center justify-center overflow-hidden px-6 lg:min-h-screen lg:px-10"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src={KNIGHTS_IMAGES.hero}
                        alt="ゴシック様式の大聖堂内部に差し込む神聖な光"
                        className="h-full w-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-kog-surface via-transparent to-kog-surface" />
                    <div className="hero-gradient absolute inset-0" />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 text-center lg:max-w-5xl lg:space-y-12">
                    <div className="space-y-4 lg:space-y-6">
                        <span className="block font-kog-body text-xs tracking-[0.3em] text-kog-primary uppercase">
                            Eternity &amp; Sovereignty
                        </span>
                        <h1 className="font-kog-headline text-4xl leading-tight font-bold tracking-[0.05em] text-kog-on-surface md:text-5xl lg:text-6xl xl:text-7xl">
                            高潔なる意志、
                            <br />
                            永劫の使命。
                        </h1>
                    </div>

                    <div className="mx-auto flex w-full max-w-[280px] flex-col gap-4 sm:max-w-md sm:flex-row sm:justify-center lg:max-w-none lg:gap-6">
                        <SiteButton asChild size="lg">
                            <Link href={SITE_ROUTES.oath}>我々の誓い</Link>
                        </SiteButton>
                    </div>
                </div>
            </section>

            <KnightLine />
        </SiteLayout>
    );
}
