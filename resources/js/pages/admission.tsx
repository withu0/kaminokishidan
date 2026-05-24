import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const SKILL_AREAS = [
    'Sales & Marketing',
    'Engineering',
    'Analytics',
    'Back-office Architecture',
] as const;

export default function Admission() {
    return (
        <SiteLayout>
            <KnightsHead title="入隊の儀: 五つの聖約 | 株式会社神の騎士団" />

            <section className="relative overflow-hidden pt-32 pb-24">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('${KNIGHTS_IMAGES.admissionHero}')`,
                    }}
                    aria-hidden
                />
                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-12 md:px-8">
                    <div className="md:col-span-8">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-0.5 w-12 bg-kog-primary" />
                            <span className="font-kog-body text-sm tracking-[0.3em] text-kog-primary uppercase">
                                Sacred Protocol
                            </span>
                        </div>
                        <h1 className="mb-8 font-kog-headline text-4xl leading-tight font-black md:text-6xl lg:text-8xl">
                            入隊の儀:
                            <br />
                            <span className="text-kog-primary">五つの聖約</span>
                        </h1>
                        <p className="max-w-2xl text-xl leading-relaxed text-kog-on-surface-variant">
                            主権なき世界において、真の卓越性を追求する者のみに許される「聖約」である。これらは単なる条件ではなく、我々の血脈に加わるための絶対的な誓約である。
                        </p>
                    </div>
                    <div className="flex items-start justify-end pt-12 md:col-span-4">
                        <div className="writing-vertical pointer-events-none border-r border-kog-primary/20 pr-4 font-kog-headline text-4xl tracking-[1em] text-kog-primary/40 select-none">
                            SOVEREIGN AUTHORITY
                        </div>
                    </div>
                </div>
            </section>

            <KnightLine className="mb-24 opacity-50" />

            <section className="mx-auto max-w-7xl px-6 pb-32 md:px-8">
                <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-3">
                    <div className="group md:col-span-2">
                        <div className="border-l-4 border-kog-primary/0 bg-kog-surface-container-low p-8 shadow-2xl transition-all duration-500 group-hover:border-kog-primary group-hover:shadow-kog-primary/5 md:p-12">
                            <span className="mb-8 block font-kog-headline text-5xl text-kog-primary/30 transition-colors group-hover:text-kog-primary">
                                I
                            </span>
                            <h2 className="mb-6 font-kog-headline text-3xl">
                                月額100万円の団員費
                            </h2>
                            <p className="mb-8 font-kog-body text-lg leading-relaxed text-kog-on-surface-variant">
                                Contribution of 5 million yen per month.
                                これは富の誇示ではない。我々が創造する「世界を変えるプロダクト」への絶対的な資源投下と、退路を断つ覚悟の証明である。
                            </p>
                            <div className="relative h-64 overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                                <img
                                    src={KNIGHTS_IMAGES.admissionGold}
                                    alt="金色の箔と深い影のテクスチャ"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-0 md:mt-24">
                        <div className="border-t-4 border-kog-primary/50 bg-kog-surface-container-highest p-10">
                            <span className="mb-8 block font-kog-headline text-5xl text-kog-primary/30">
                                II
                            </span>
                            <h2 className="mb-6 font-kog-headline text-3xl">
                                三十代前半の指導者
                            </h2>
                            <p className="leading-relaxed text-kog-on-surface-variant">
                                Limited to business leaders in their 30s.
                                体力、知力、野心が最高純度で交差する黄金期に限定する。次世代の覇権を掌握すべく、同世代の精鋭のみを募るものとする。
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="mt-0 bg-kog-surface-container-low p-10 md:mt-12">
                            <span className="mb-8 block font-kog-headline text-5xl text-kog-primary/30">
                                III
                            </span>
                            <h2 className="mb-6 font-kog-headline text-3xl">
                                顕著なる功績
                            </h2>
                            <p className="mb-6 leading-relaxed text-kog-on-surface-variant">
                                Must have outstanding achievements.
                                以下の各領域における、他を圧倒する実績の提示を必須とする。
                            </p>
                            <ul className="space-y-4 font-kog-body text-sm tracking-widest text-kog-secondary uppercase">
                                {SKILL_AREAS.map((area) => (
                                    <li
                                        key={area}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="h-1.5 w-1.5 bg-kog-primary" />
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden md:col-span-2">
                        <img
                            src={KNIGHTS_IMAGES.admissionTokyo}
                            alt="東京の夜景と光の軌跡"
                            className="h-[400px] w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-kog-surface via-transparent to-transparent" />
                        <div className="absolute right-12 bottom-12 left-12">
                            <span className="mb-4 block font-kog-headline text-5xl text-kog-primary/30">
                                IV
                            </span>
                            <h2 className="mb-4 font-kog-headline text-3xl">
                                日本発グローバルへの献身
                            </h2>
                            <p className="max-w-xl text-lg text-kog-on-surface-variant">
                                Total commitment to creating global products
                                from Japan.
                                視座は常に国境を超越する。極東の地から世界を震撼させるプロダクトを鍛え上げる、その志のみを唯一の燃料とする。
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center md:col-span-3">
                        <div className="relative max-w-2xl overflow-hidden bg-kog-surface-container-low px-12 py-20 text-center">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-kog-primary to-transparent" />
                            <span className="mb-6 block font-kog-headline text-7xl text-kog-primary/20">
                                V
                            </span>
                            <h2 className="mb-6 font-kog-headline text-4xl">
                                限定十五名の定員
                            </h2>
                            <p className="mb-4 text-xl leading-relaxed text-kog-on-surface-variant">
                                Recruitment ends once 15 members are reached.
                                定員充足と同時に、一切の門戸を閉鎖する。
                            </p>
                            <p className="mb-4 text-xl leading-relaxed text-kog-on-surface-variant">
                                尚、神の騎士団は30代で日本最高峰の団体となる
                            </p>
                            <p className="font-kog-body text-sm tracking-[0.4em] text-kog-primary uppercase">
                                Remaining Slots:{' '}
                                <span className="text-2xl font-bold">03</span>
                            </p>
                            <Link
                                href={SITE_ROUTES.members}
                                className="group relative mt-8 inline-block overflow-hidden bg-kog-primary px-12 py-4 font-kog-headline text-lg font-bold tracking-[0.2em] text-kog-on-primary uppercase shadow-[0_0_15px_rgba(233,195,73,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(233,195,73,0.4)] active:scale-95"
                            >
                                <span className="relative z-10">団長と副団長室</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="pointer-events-none absolute inset-px border border-white/20" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-kog-surface-container-low py-32 text-center">
                <div className="absolute top-0 left-1/2 h-32 w-px -translate-x-1/2 bg-kog-primary" />
                <div className="mx-auto max-w-4xl px-8">
                    <h3 className="mb-12 font-kog-headline text-3xl leading-tight italic md:text-5xl">
                        &quot;汝の野心は、この秩序を揺るがすに足るか&quot;
                    </h3>
                    <Link
                        href={SITE_ROUTES.recruitment}
                        className="group relative inline-block overflow-hidden bg-kog-primary px-16 py-8 font-kog-headline text-xl font-bold tracking-[0.2em] text-kog-on-primary uppercase transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">誓約を立てる</span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute inset-px border border-white/20" />
                    </Link>
                    <div className="mt-12 flex items-center justify-center gap-2 font-kog-body text-xs tracking-widest text-kog-primary/60 uppercase">
                        <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            verified_user
                        </span>
                        Encrypted Admission Request Protocol Active
                    </div>
                </div>
            </section>

            <footer className="flex w-full flex-col items-center gap-8 border-t border-kog-primary/20 bg-kog-surface px-8 py-24 text-center">
                <div className="font-kog-headline text-2xl tracking-widest text-kog-primary italic">
                    The Sovereign Order
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        'Privacy Covenant',
                        'Terms of Service',
                        'Contact the High Council',
                    ].map((label) => (
                        <a
                            key={label}
                            href="#"
                            className="text-kog-secondary/60 transition-colors hover:text-kog-primary"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <p className="mt-4 text-kog-secondary/40">
                    © MMXIV The Sovereign Authority. All Rights Reserved.
                </p>
            </footer>
        </SiteLayout>
    );
}
