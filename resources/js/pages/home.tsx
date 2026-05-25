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

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <span className="animate-fade-in-up mb-6 block font-kog-body text-xs font-bold tracking-[0.4em] text-kog-primary uppercase md:mb-8 md:text-sm md:tracking-[0.5em]">
                        Our Sacred Mission
                    </span>
                    <h1 className="animate-fade-in-up mb-8 font-kog-headline text-4xl leading-tight font-black tracking-tight delay-200 md:mb-10 md:text-6xl lg:text-7xl xl:text-8xl">
                        <span className="text-kog-on-surface">叡智と勇気で、</span>
                        <br />
                        <span className="text-glow text-kog-primary">
                            未来を護る。
                        </span>
                    </h1>
                    <p className="animate-fade-in-up mx-auto mb-12 max-w-3xl text-base leading-relaxed font-medium text-kog-on-surface delay-300 md:mb-14 md:text-lg">
                        株式会社神の騎士団は、現代の複雑なビジネスを紐解き、揺るぎない正義と他を圧倒する専門性を武器に、世界変革を起こす集団である。
                    </p>
                    <div className="animate-fade-in-up delay-500">
                        <SiteButton asChild className="md:px-16 md:py-5 md:text-lg">
                            <Link href={SITE_ROUTES.oath}>
                                騎士団の団室の扉を開ける
                            </Link>
                        </SiteButton>
                    </div>
                </div>
            </section>

            <KnightLine />
        </SiteLayout>
    );
}
