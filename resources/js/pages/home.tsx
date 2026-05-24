import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteFooter } from '@/components/site/site-footer';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

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
    return (
        <SiteLayout>
            <KnightsHead title="株式会社神の騎士団" />

            {/* Hero */}
            <section className="relative flex min-h-[min(795px,90dvh)] flex-col items-center justify-center overflow-hidden px-6 lg:min-h-screen lg:px-10">
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
                        <Link
                            href={SITE_ROUTES.oath}
                            className="bg-kog-primary px-8 py-4 text-center font-bold tracking-widest text-kog-on-primary shadow-[0_0_20px_rgba(233,195,73,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 lg:px-12 lg:py-5"
                        >
                            OUR OATH
                        </Link>
                        <Link
                            href={SITE_ROUTES.business}
                            className="border border-kog-outline-variant px-8 py-4 text-center font-bold tracking-widest text-kog-secondary transition-all duration-300 hover:bg-kog-surface-container-high active:scale-95 lg:px-12 lg:py-5"
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
            </section>

            <KnightLine />

            {/* Mission */}
            <section className="bg-kog-surface px-6 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-md space-y-12 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-16 xl:max-w-7xl">
                    <div className="space-y-4 lg:sticky lg:top-28">
                        <h2 className="border-l-4 border-kog-primary pl-4 font-kog-headline text-3xl font-bold lg:text-4xl">
                            騎士としての誓い
                        </h2>
                        <p className="text-lg leading-relaxed font-light text-kog-on-surface-variant lg:text-xl">
                            我らの使命は、時代を超越する価値を創造し、混迷する現代社会において揺るぎない正義の指針となること。高潔さを磨き、一歩も引かぬ覚悟で未来を切り拓く。
                        </p>
                    </div>

                    <div className="grid gap-6 lg:gap-8">
                        <div className="border-l border-kog-primary/20 bg-kog-surface-container-low p-8 lg:p-10">
                            <span className="material-symbols-outlined mb-4 block text-kog-primary">
                                shield
                            </span>
                            <h3 className="mb-2 font-kog-headline text-xl lg:text-2xl">
                                不動の信頼
                            </h3>
                            <p className="text-sm leading-relaxed text-kog-on-surface-variant lg:text-base">
                                百年の計を以て、顧客との絆を永遠のものとする。裏切りを許さぬ厳格な倫理観こそが我らの盾。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business domains */}
            <section className="bg-kog-surface-container-low px-6 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-md space-y-16 lg:max-w-7xl">
                    <div className="space-y-4 text-center">
                        <h2 className="font-kog-headline text-3xl font-bold tracking-wider lg:text-4xl">
                            三つの聖域
                        </h2>
                        <KnightLine className="mx-auto w-24" />
                    </div>

                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0 xl:gap-12">
                        {DOMAINS.map((domain) => (
                            <article
                                key={domain.label}
                                className="group relative overflow-hidden"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4] xl:aspect-[4/3]">
                                    <img
                                        src={domain.image}
                                        alt={domain.alt}
                                        className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="mt-6 space-y-2 lg:mt-8">
                                    <span className="block font-kog-body text-xs tracking-widest text-kog-primary">
                                        {domain.label}
                                    </span>
                                    <h4 className="font-kog-headline text-2xl lg:text-xl xl:text-2xl">
                                        {domain.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-kog-on-surface-variant lg:text-base">
                                        {domain.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-kog-surface-container-lowest px-6 py-32 text-center lg:px-10 lg:py-40">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src={KNIGHTS_IMAGES.cta}
                        alt="暗闇に浮かぶ金色のシルクの抽象イメージ"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-md space-y-10 lg:max-w-xl lg:space-y-12">
                    <div className="space-y-4">
                        <h2 className="font-kog-headline text-3xl font-bold lg:text-4xl">
                            団員を目指す
                        </h2>
                        <p className="text-kog-on-surface-variant lg:text-lg">
                            我らと共に、新しい時代を築く覚悟はあるか。求む、誇り高き志。
                        </p>
                    </div>
                    <Link
                        href={SITE_ROUTES.recruitment}
                        className="inline-block w-full bg-kog-primary py-5 text-center font-bold tracking-[0.2em] text-kog-on-primary transition-all hover:brightness-110 active:scale-95 sm:mx-auto sm:max-w-md lg:max-w-lg lg:py-6"
                    >
                        RECRUITMENT 2024
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </SiteLayout>
    );
}
