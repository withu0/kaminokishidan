import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const OATHS = [
    {
        num: '01',
        title: '真実への献身',
        description:
            '我々は、情報の氾濫する現代において、不変の真実を見極め、それを守り抜く盾となる。透明性と誠実さを、すべての決断の根源に置く。',
    },
    {
        num: '02',
        title: '革新の剣',
        description:
            '伝統を重んじることは、停滞を意味しない。我々は既存の枠組みを打ち破る「革新の剣」となり、社会に新たな価値をもたらす。',
    },
    {
        num: '03',
        title: '不動の信頼',
        description:
            'いかなる荒波が訪れようとも、一度結んだ絆を違えることはない。我々はパートナーと共に歩み、永劫に続く信頼の礎を築く。',
    },
    {
        num: '04',
        title: '高潔な対話',
        description:
            '力による支配ではなく、高潔なる意志に基づく対話を重んじる。多様な価値観を尊重し、真の合意形成から新たな地平を切り拓く。',
    },
    {
        num: '05',
        title: '永劫の共生',
        description:
            '我々の使命は、世代を超えて受け継がれる繁栄を創ることである。地球と社会の調和を追求し、未来の守護者として共生の道を歩む。',
    },
] as const;

export default function Oath() {
    return (
        <SiteLayout>
            <KnightsHead title="騎士としての誓い | 株式会社神の騎士団" />

            <section className="relative flex h-screen items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={KNIGHTS_IMAGES.oathHero}
                        alt="大聖堂のような構造に差し込む光"
                        className="h-full w-full scale-110 object-cover opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-kog-surface via-transparent to-kog-surface" />
                </div>
                <div className="relative z-10 max-w-5xl px-6 text-center">
                    <span className="mb-8 block animate-pulse font-kog-body text-sm tracking-[0.4em] text-kog-primary uppercase md:text-base">
                        Guardian of Values
                    </span>
                    <h1 className="mb-8 font-kog-headline text-4xl leading-tight font-black tracking-tighter text-kog-on-surface italic md:text-6xl lg:text-8xl">
                        高潔なる意志、
                        <br />
                        <span className="text-kog-primary not-italic">
                            永劫の使命。
                        </span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-kog-on-surface-variant md:text-xl">
                        我々は、時代が移ろえど変わることのない「正義」と「価値」を追求する騎士団である。
                        <br />
                        現代社会の闇に、不変の光を灯すための挑戦を続ける。
                    </p>
                    <Link
                        href={SITE_ROUTES.admission}
                        className="inline-block w-64 border-2 border-kog-primary bg-kog-primary py-4 text-lg font-bold text-kog-on-primary italic transition-all duration-300 hover:bg-transparent hover:text-kog-primary"
                    >
                        団員を志す
                    </Link>
                </div>
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 opacity-50">
                    <span className="font-kog-body text-xs tracking-[0.5em] uppercase">
                        Scroll
                    </span>
                    <div className="h-16 w-px bg-gradient-to-b from-kog-primary to-transparent" />
                </div>
            </section>

            <section className="relative overflow-hidden bg-kog-surface px-6 py-32 md:px-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-12">
                    <div className="relative md:col-span-7">
                        <div className="pointer-events-none absolute -top-12 -left-12 font-kog-headline text-[12rem] font-black text-kog-surface-container-low opacity-50 select-none">
                            OATH
                        </div>
                        <h2 className="relative z-10 mb-16 font-kog-headline text-3xl leading-snug font-bold md:text-4xl lg:text-6xl">
                            騎士としての誓い
                        </h2>
                        <div className="relative z-10 space-y-16">
                            {OATHS.map((oath) => (
                                <div key={oath.num} className="group flex gap-8">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-kog-primary font-bold text-kog-primary">
                                        {oath.num}
                                    </div>
                                    <div>
                                        <h3 className="mb-4 font-kog-headline text-2xl font-bold text-kog-primary">
                                            {oath.title}
                                        </h3>
                                        <p className="leading-relaxed text-kog-on-surface-variant">
                                            {oath.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-5 md:sticky md:top-32">
                        <div className="relative aspect-[3/4] overflow-hidden bg-kog-surface-container-high">
                            <img
                                src={KNIGHTS_IMAGES.oathStatue}
                                alt="戦士の彫刻のモノクローム写真"
                                className="h-full w-full object-cover transition-all duration-700 hover:grayscale-0"
                            />
                            <div className="pointer-events-none absolute inset-0 border-[20px] border-kog-surface/30" />
                        </div>
                    </div>
                </div>
            </section>

            <KnightLine className="opacity-30" />

            <section className="relative bg-kog-surface px-6 py-40 text-center">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 inline-block border border-kog-primary/20 p-4">
                        <span className="material-symbols-outlined text-4xl text-kog-primary">
                            shield
                        </span>
                    </div>
                    <h2 className="mb-12 font-kog-headline text-3xl leading-tight font-bold md:text-4xl lg:text-6xl">
                        我々の使命は、
                        <br />
                        未来の守護者であること。
                    </h2>
                    <p className="mb-16 text-xl leading-relaxed font-light text-kog-on-surface-variant">
                        不確実な時代において、羅針盤となる存在であり続けること。それが「神の騎士団」としての誇りであり、存在意義である。我々は立ち止まることなく、常に最前線で価値を紡ぎ続ける。
                    </p>
                    <KnightLine className="mx-auto mb-16 max-w-md opacity-40" />
                    <Link
                        href={SITE_ROUTES.admission}
                        className="inline-block px-16 py-6 text-xl font-bold tracking-[0.2em] text-kog-on-primary uppercase transition-all hover:shadow-[0_0_20px_rgba(233,195,73,0.3)] bg-kog-primary"
                    >
                        団員を志す
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
