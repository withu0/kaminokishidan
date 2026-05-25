import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const PROCESS_STEPS = [
    {
        num: '01',
        title: '拝謁 (Consultation)',
        description:
            '現し世の課題を冷徹に抽出。本質的なリスクを暴き、対話を執行する。',
    },
    {
        num: '02',
        title: '審判 (Analysis)',
        description:
            '森羅万象を多角的に分析。データと直観を統合し、勝利への道筋を審判する。',
    },
    {
        num: '03',
        title: '出陣 (Execution)',
        description:
            '精鋭「騎士」を戦地に投入。迅速かつ正確無比なアクションで結果を屠る。',
    },
    {
        num: '04',
        title: '凱旋 (Review)',
        description:
            '成果を盤石なものとし、恒久的な安定を確保。聖域の保守を徹底する。',
    },
] as const;

const STRENGTHS = [
    {
        icon: 'gavel',
        title: '鉄の倫理観',
        description:
            '法を超越した独自の「騎士道コード」。いかなる利欲にも屈せず、預託された利益を絶対的に死守する。',
        fill: true,
    },
    {
        icon: 'precision_manufacturing',
        title: '超克の技術覇権',
        description:
            '最先端AIと古今東西の戦略知を融合。他者の追随を許さぬ、独自の制圧的ソリューションを保持。',
        fill: true,
    },
    {
        icon: 'diversity_3',
        title: '精鋭の結束',
        description:
            '各界の頂点に立つ「騎士」が集結。個の卓絶と組織の盤石な連携が、不可能という概念を消し去る。',
        fill: true,
    },
] as const;

export default function Business() {
    return (
        <SiteLayout>
            <KnightsHead title="事業案内 | 株式会社神の騎士団" />

            <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0 bg-kog-surface">
                    <img
                        src={KNIGHTS_IMAGES.businessHero}
                        alt="鎧を纏う騎士のシルエット"
                        className="h-full w-full object-cover object-center opacity-25 contrast-125 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-kog-surface/90 via-kog-surface/40 to-kog-surface" />
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
                        <Link
                            href={SITE_ROUTES.members}
                            className="inline-block bg-kog-primary px-12 py-4 font-bold tracking-[0.15em] text-kog-on-primary shadow-[0_0_24px_rgba(233,195,73,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(233,195,73,0.55)] active:scale-95 md:px-16 md:py-5 md:text-lg"
                        >
                            騎士団の団室の扉を開ける
                        </Link>
                    </div>
                </div>

                <div
                    className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 pb-[env(safe-area-inset-bottom)] lg:bottom-12"
                    aria-hidden
                >
                    <span className="font-kog-body text-[10px] font-bold tracking-[0.35em] text-kog-primary uppercase md:text-xs">
                        Scroll to Descend
                    </span>
                    <div className="h-14 w-px bg-kog-primary/80" />
                </div>
            </header>

            <KnightLine className="opacity-30" />

            <section className="bg-kog-surface px-6 py-32 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-24 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <h2 className="mb-6 font-kog-headline text-3xl font-bold md:text-4xl lg:text-6xl">
                                三位一体の断罪
                            </h2>
                            <p className="text-lg text-kog-on-surface-variant">
                                我々の提供するサービスは、論理、技術、そして情熱が融合した唯一無二のフレームワークに基づく。
                            </p>
                        </div>
                        <div className="hidden text-right lg:col-span-4 lg:block">
                            <span className="font-kog-headline text-8xl font-black text-kog-surface-container-highest opacity-10">
                                DOMAINS
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
                        <div className="group relative overflow-hidden border border-kog-outline-variant/10 bg-kog-surface-container-low p-8 md:col-span-6 md:p-12 lg:col-span-8">
                            <span
                                className="material-symbols-outlined pointer-events-none absolute top-0 right-0 p-8 text-[12rem] text-kog-primary opacity-5 transition-opacity group-hover:opacity-10"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                                aria-hidden
                            >
                                shield_with_heart
                            </span>
                            <span className="mb-4 block font-bold tracking-widest text-kog-primary">
                                SACRED DOMAIN 01
                            </span>
                            <h3 className="mb-6 font-kog-headline text-3xl font-bold">
                                絶対資産防衛
                            </h3>
                            <p className="mb-8 max-w-md text-sm leading-relaxed text-kog-on-surface-variant">
                                デジタル資産から物理的利権まで、あらゆる邪悪なる脅威から守り抜く。我々の防御は単なる壁ではない。敵対勢力を無力化する知的な要塞である。
                            </p>
                            <ul className="mb-10 space-y-4">
                                {[
                                    'リスク断罪アセスメント',
                                    'クライシス・ドミネーション',
                                    'デジタル・ガーディアン',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-4 text-sm font-bold tracking-widest"
                                    >
                                        <span className="h-1.5 w-1.5 bg-kog-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <span className="inline-flex items-center gap-2 font-bold tracking-widest text-kog-primary transition-all hover:gap-6">
                                深淵を覗く
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </span>
                        </div>

                        <div className="flex flex-col justify-between border border-kog-outline-variant/10 bg-kog-surface-container-high p-10 transition-colors hover:bg-kog-surface-bright md:col-span-3 lg:col-span-4">
                            <div>
                                <span className="material-symbols-outlined mb-8 text-5xl text-kog-primary">
                                    swords
                                </span>
                                <h3 className="mb-4 font-kog-headline text-2xl font-bold">
                                    殲滅的コンサルティング
                                </h3>
                                <p className="text-sm leading-relaxed text-kog-on-surface-variant">
                                    現状維持は衰退。市場の隙間を抉り、確実なる勝利へと導く戦術を冷徹に立案する。
                                </p>
                            </div>
                            <div className="mt-8 border-t border-kog-outline-variant pt-6">
                                <span className="text-xs tracking-[0.3em] text-kog-secondary uppercase opacity-60">
                                    Victory Focus
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between border-l-4 border-kog-primary bg-kog-surface-container-highest p-10 md:col-span-3 lg:col-span-4">
                            <div>
                                <span className="material-symbols-outlined mb-8 text-5xl text-kog-primary">
                                    auto_awesome
                                </span>
                                <h3 className="mb-4 font-kog-headline text-2xl font-bold">
                                    叡智の恒久継承
                                </h3>
                                <p className="text-sm leading-relaxed text-kog-on-surface-variant">
                                    次世代の指導者を錬成し、永続的な繁栄を確約する教育プログラムを執行する。
                                </p>
                            </div>
                            <div className="mt-8">
                                <span className="text-xs tracking-[0.3em] text-kog-secondary uppercase opacity-60">
                                    Succession Planning
                                </span>
                            </div>
                        </div>

                        <div className="group relative min-h-[300px] overflow-hidden border border-kog-outline-variant/10 md:col-span-6 lg:col-span-8">
                            <img
                                src={KNIGHTS_IMAGES.businessStrategy}
                                alt="戦略会議のボードルーム"
                                className="absolute inset-0 h-full w-full object-cover brightness-50 grayscale transition-all duration-1000 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-kog-surface/40 transition-all group-hover:bg-transparent" />
                            <div className="absolute bottom-0 left-0 p-10">
                                <h3 className="mb-2 font-kog-headline text-3xl font-bold">
                                    最高機密管理
                                </h3>
                                <p className="max-w-sm font-medium tracking-wide text-kog-on-surface">
                                    神の騎士団独自の暗号化プロトコルによる、物理的・論理的聖域の構築。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-kog-primary/10 bg-kog-surface-container-low py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <h2 className="mb-4 font-kog-headline text-4xl font-bold">
                                聖なる執行プロセス
                            </h2>
                            <div className="h-0.5 w-32 bg-kog-primary" />
                        </div>
                        <p className="max-w-md font-medium text-kog-on-surface-variant italic">
                            「一瞬の油断も許されない。完璧な遂行こそが我々の誇り、そして義務である。」
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                        {PROCESS_STEPS.map((step) => (
                            <div
                                key={step.num}
                                className="relative z-10 bg-kog-surface-container-high/50 p-8"
                            >
                                <div className="absolute -top-8 -left-2 font-kog-headline text-7xl font-black text-kog-primary/10">
                                    {step.num}
                                </div>
                                <h4 className="mb-6 font-kog-headline text-xl font-bold tracking-widest text-kog-primary">
                                    {step.title}
                                </h4>
                                <p className="text-sm leading-relaxed font-medium text-kog-on-surface-variant">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-kog-surface px-6 py-32 md:px-12">
                <span
                    className="material-symbols-outlined pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-[50rem] text-kog-primary opacity-[0.03] select-none"
                    aria-hidden
                >
                    shield
                </span>
                <div className="relative mx-auto max-w-7xl">
                    <h2 className="mb-20 text-center font-kog-headline text-4xl font-bold tracking-widest md:text-5xl">
                        選ばれし者の絶対優位
                    </h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {STRENGTHS.map((item) => (
                            <div
                                key={item.title}
                                className="border border-kog-outline-variant/10 bg-kog-surface-container-low p-12 shadow-2xl transition-all duration-700 hover:border-kog-primary/50"
                            >
                                <div className="mb-10 flex h-20 w-20 items-center justify-center border border-kog-primary/20 bg-kog-primary/10">
                                    <span
                                        className="material-symbols-outlined text-4xl text-kog-primary"
                                        style={
                                            item.fill
                                                ? {
                                                      fontVariationSettings:
                                                          "'FILL' 1",
                                                  }
                                                : undefined
                                        }
                                    >
                                        {item.icon}
                                    </span>
                                </div>
                                <h4 className="mb-6 font-kog-headline text-2xl font-bold tracking-wider">
                                    {item.title}
                                </h4>
                                <p className="leading-relaxed font-medium text-kog-on-surface-variant">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-kog-primary py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,transparent_70%)] opacity-10" />
                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mb-10 font-kog-headline text-3xl leading-tight font-black tracking-tighter text-kog-on-primary md:text-6xl">
                        その志を、
                        <br />
                        我々の剣と盾に託せ。
                    </h2>
                    <p className="mb-16 text-xl font-bold tracking-[0.2em] text-kog-on-primary opacity-90">
                        至難の課題こそ、神の騎士団がその真価を世界に示す時である。
                    </p>
                    <Link
                        href={SITE_ROUTES.admission}
                        className="inline-block bg-kog-surface px-20 py-6 font-kog-headline text-2xl font-bold tracking-widest text-kog-on-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95"
                    >
                        聖約を結ぶ
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
