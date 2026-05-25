import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteButton } from '@/components/site/site-button';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const VALUES = [
    {
        icon: 'swords',
        title: '勇猛果敢',
        description:
            '未知の領域や困難な挑戦に対しても、一歩も引かず解決へと導く強固な意志を持ちます。',
        fill: true,
    },
    {
        icon: 'balance',
        title: '公明正大',
        description:
            'すべての取引において透明性を確保し、常に正道を歩むことで揺るぎない信頼を獲得します。',
        fill: true,
    },
    {
        icon: 'handshake',
        title: '厚情博愛',
        description:
            '仲間とクライアントを尊重し、真のパートナーシップを築くための献身を惜しみません。',
        fill: true,
    },
] as const;

const COMPANY_ROWS = [
    {
        label: '商号',
        content: '株式会社神の騎士団 (THE SOVEREIGN ORDER Inc.)',
    },
    { label: '代表者', content: '代表取締役　アーサー・ペンドラゴン' },
    { label: '設立', content: '2024年1月1日' },
] as const;

const BUSINESS_LINES = [
    '・戦略的セキュリティコンサルティング',
    '・次世代サイバー防衛インフラの構築',
    '・高信頼資産運用アルゴリズムの開発',
    '・騎士道精神に基づくリーダーシップ研修プログラム',
] as const;

export default function Company() {
    return (
        <SiteLayout>
            <KnightsHead title="会社概要 | 株式会社神の騎士団" />

            {/* Hero */}
            <section className="relative flex min-h-[min(614px,65dvh)] items-center justify-center overflow-hidden lg:min-h-[614px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src={KNIGHTS_IMAGES.companyHero}
                        alt="大聖堂の内部に差し込む劇的な光の筋"
                        className="h-full w-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-kog-surface/0 via-kog-surface/60 to-kog-surface" />
                </div>

                <div className="relative z-10 max-w-4xl px-4 text-center">
                    <span className="mb-4 block font-kog-body text-sm tracking-[0.3em] text-kog-primary uppercase">
                        Corporate Profile
                    </span>
                    <h1 className="mb-6 font-kog-headline text-4xl font-bold tracking-tight text-kog-on-surface md:text-5xl lg:text-7xl">
                        不朽の信頼を、
                        <br />
                        現代の騎士道と共に。
                    </h1>
                    <KnightLine className="mx-auto mt-8 w-1/3 max-w-xs" />
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:py-32">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    <div className="group relative overflow-hidden border-l-4 border-kog-primary bg-kog-surface-container-low p-8 md:col-span-8 md:p-12">
                        <div className="relative z-10">
                            <span className="mb-2 block font-kog-headline text-xl text-kog-primary italic">
                                Mission
                            </span>
                            <h2 className="mb-6 font-kog-headline text-2xl font-bold md:text-3xl">
                                誠実と勇気をもって、
                                <br />
                                社会の盾となる。
                            </h2>
                            <p className="max-w-lg leading-relaxed text-kog-on-surface-variant">
                                私たちは単なる企業ではありません。正義、礼節、そして不屈の精神を重んじる「騎士道」を現代のビジネスに翻訳し、クライアントの最も困難な課題に立ち向かう守護者であることを使命としています。
                            </p>
                        </div>
                        <span
                            className="material-symbols-outlined pointer-events-none absolute -right-8 -bottom-8 hidden text-[12rem] text-kog-primary/5 select-none md:block"
                            aria-hidden
                        >
                            shield
                        </span>
                    </div>

                    <div className="flex flex-col justify-end border-t-4 border-kog-primary/40 bg-kog-surface-container-high p-8 md:col-span-4">
                        <span className="mb-2 block font-kog-headline text-lg text-kog-primary italic">
                            Vision
                        </span>
                        <h3 className="mb-4 font-kog-headline text-2xl font-bold">
                            最果ての信頼を築く。
                        </h3>
                        <p className="text-sm leading-relaxed text-kog-on-surface-variant">
                            100年後の未来においても変わらぬ価値を提供し続け、世界中で最も「信頼」という言葉に相応しい組織であり続けること。
                        </p>
                    </div>

                    <div className="mt-0 grid grid-cols-1 gap-6 md:col-span-12 md:grid-cols-3">
                        {VALUES.map((value) => (
                            <div
                                key={value.title}
                                className="border border-kog-outline-variant/15 bg-kog-surface-container-low p-8 transition-colors hover:border-kog-primary/50"
                            >
                                <div className="mb-4 flex items-center gap-4">
                                    <span
                                        className="material-symbols-outlined text-kog-primary"
                                        style={
                                            value.fill
                                                ? {
                                                      fontVariationSettings:
                                                          "'FILL' 1",
                                                  }
                                                : undefined
                                        }
                                    >
                                        {value.icon}
                                    </span>
                                    <h4 className="font-kog-headline text-lg font-bold">
                                        {value.title}
                                    </h4>
                                </div>
                                <p className="text-sm text-kog-on-surface-variant">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company info */}
            <section className="relative overflow-hidden bg-kog-surface-container-lowest py-24 lg:py-32">
                <div
                    className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-24 flex-col items-center justify-center border-r border-kog-primary/10 opacity-30 select-none md:flex"
                    aria-hidden
                >
                    <span className="font-kog-headline rotate-90 text-2xl tracking-[1em] whitespace-nowrap text-kog-primary uppercase">
                        Spirit of Chivalry
                    </span>
                </div>

                <div className="relative mx-auto max-w-4xl px-6 md:pl-16 lg:px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 font-kog-headline text-3xl font-bold lg:text-4xl">
                            企業情報
                        </h2>
                        <p className="font-kog-body text-sm tracking-widest text-kog-on-surface-variant uppercase">
                            Company Overview
                        </p>
                    </div>

                    <div>
                        {COMPANY_ROWS.map((row) => (
                            <div
                                key={row.label}
                                className="group grid grid-cols-1 border-b border-kog-outline-variant/20 px-4 py-8 transition-colors hover:bg-kog-surface-container-low md:grid-cols-4"
                            >
                                <div className="mb-2 font-kog-headline font-bold text-kog-primary md:col-span-1 md:mb-0">
                                    {row.label}
                                </div>
                                <div className="font-kog-body text-lg md:col-span-3">
                                    {row.content}
                                </div>
                            </div>
                        ))}

                        <div className="group grid grid-cols-1 border-b border-kog-outline-variant/20 px-4 py-8 transition-colors hover:bg-kog-surface-container-low md:grid-cols-4">
                            <div className="mb-2 font-kog-headline font-bold text-kog-primary md:col-span-1 md:mb-0">
                                所在地
                            </div>
                            <div className="md:col-span-3">
                                <p className="mb-4 font-kog-body text-lg">
                                    〒100-0005 東京都千代田区丸の内1-1-1
                                    皇居前ビル 42F
                                </p>
                                <div className="h-48 overflow-hidden border border-kog-outline-variant/30 bg-kog-surface-container-high md:h-64">
                                    <img
                                        src={KNIGHTS_IMAGES.companyMap}
                                        alt="東京・千代田区周辺の地図"
                                        className="h-full w-full object-cover opacity-60 grayscale"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group grid grid-cols-1 border-b border-kog-outline-variant/20 px-4 py-8 transition-colors hover:bg-kog-surface-container-low md:grid-cols-4">
                            <div className="mb-2 font-kog-headline font-bold text-kog-primary md:col-span-1 md:mb-0">
                                事業内容
                            </div>
                            <div className="space-y-2 font-kog-body text-kog-on-surface-variant md:col-span-3">
                                {BUSINESS_LINES.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>

                        <div className="group grid grid-cols-1 px-4 py-8 transition-colors hover:bg-kog-surface-container-low md:grid-cols-4">
                            <div className="mb-2 font-kog-headline font-bold text-kog-primary md:col-span-1 md:mb-0">
                                主要取引銀行
                            </div>
                            <div className="font-kog-body text-kog-on-surface-variant md:col-span-3">
                                三井住友銀行 / 三菱UFJ銀行 / 聖杯信用金庫
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
                <div className="mb-8 inline-block bg-kog-primary p-1">
                    <div className="bg-kog-surface px-8 py-2">
                        <span
                            className="material-symbols-outlined text-4xl text-kog-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            ink_marker
                        </span>
                    </div>
                </div>
                <h2 className="mb-8 font-kog-headline text-2xl font-bold italic md:text-3xl">
                    &quot;Trust is the ultimate weapon.&quot;
                </h2>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                    <SiteButton asChild>
                        <Link href={SITE_ROUTES.members}>団員を見る</Link>
                    </SiteButton>
                    <SiteButton asChild variant="outline">
                        <Link href={SITE_ROUTES.recruitment}>
                            採用サイトを見る
                        </Link>
                    </SiteButton>
                    <SiteButton type="button" variant="outline">
                        資料請求
                    </SiteButton>
                </div>
            </section>
        </SiteLayout>
    );
}
