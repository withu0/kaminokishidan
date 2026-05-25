import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const CLASSIFIED_MEMBERS = [
    { icon: 'shield', overlay: 'lock', label: 'CLASSIFIED', name: '秘匿された魂' },
    { icon: 'person_off', overlay: 'visibility_off', label: 'SECRET', name: '静寂の執行者' },
    { icon: 'security', overlay: 'key', label: 'CLASSIFIED', name: '境界の番人' },
    { icon: 'policy', overlay: 'fingerprint', label: 'TOP SECRET', name: '影の調整役' },
    { icon: 'gavel', name: '断罪の刃' },
    { icon: 'history_edu', name: '記録の守護者' },
    { icon: 'all_inclusive', name: '永劫の理' },
    { icon: 'language', name: '福音の伝道者' },
    { icon: 'auto_fix_high', name: '錬成の魔術師' },
    { icon: 'castle', name: '堅城の要塞' },
    { icon: 'psychology', name: '深淵の読解者' },
    { icon: 'hub', name: '繋ぎの連鎖' },
    { icon: 'star_half', name: '黎明の星' },
] as const;

function QuoteBlock({
    icon,
    text,
}: {
    icon: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-6">
            <span className="mt-1 text-kog-primary">
                <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                    {icon}
                </span>
            </span>
            <p className="font-kog-headline text-xl leading-relaxed text-kog-on-surface-variant italic md:text-2xl">
                {text}
            </p>
        </div>
    );
}

export default function Members() {
    return (
        <SiteLayout>
            <KnightsHead title="ORDER MEMBERS | 株式会社神の騎士団" />

            <section className="relative flex min-h-[min(614px,70dvh)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={KNIGHTS_IMAGES.membersHero}
                        alt="神聖な光が差し込む空間"
                        className="h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-kog-surface/20 via-kog-surface to-kog-surface" />
                </div>
                <div className="relative z-10 max-w-4xl">
                    <span className="mb-4 block font-kog-body text-sm font-bold tracking-[0.5em] text-kog-primary uppercase">
                        Sacred Guardians
                    </span>
                    <h1 className="font-kog-headline text-4xl leading-tight font-black tracking-tighter text-kog-on-surface md:text-5xl lg:text-8xl">
                        ORDER MEMBERS
                        <br />
                        <span className="text-kog-primary italic">
                            聖域の守護者たち
                        </span>
                    </h1>
                    <KnightLine className="mx-auto mt-12 max-w-xs" />
                </div>
            </section>

            <section className="bg-kog-surface px-6 py-24 md:px-12 lg:px-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
                    <div className="group relative w-full lg:w-1/2">
                        <div className="absolute -inset-4 border border-kog-primary/20 transition-all duration-500 group-hover:inset-0 group-hover:border-kog-primary/50" />
                        <div className="aspect-[4/5] overflow-hidden bg-kog-surface-container-highest grayscale transition-all duration-700 group-hover:grayscale-0">
                            <img
                                src={KNIGHTS_IMAGES.memberHikaru}
                                alt="団長ヒカル"
                                className="h-full w-full scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-12 lg:w-1/2">
                        <div>
                            <p className="mb-2 font-kog-headline text-2xl font-bold text-kog-primary">
                                団長 / THE SWORD
                            </p>
                            <h2 className="mb-4 font-kog-headline text-5xl leading-none font-bold tracking-tighter text-kog-on-surface md:text-6xl">
                                ヒカル
                            </h2>
                            <div className="h-1 w-24 bg-kog-primary" />
                        </div>
                        <div className="space-y-8">
                            <QuoteBlock
                                icon="bolt"
                                text="「圧倒的な発信力で新時代を切り拓く。その言葉は雷鳴の如く、停滞した世界に楔を打ち込むものである。」"
                            />
                            <QuoteBlock
                                icon="groups"
                                text="「日本最大級のコミュニティを統べる。数多の魂を束ね、一つの大いなる意志へと昇華させる器を持つ。」"
                            />
                            <QuoteBlock
                                icon="auto_awesome"
                                text="「既存の価値観を破壊し、新たな秩序を創造する。混沌を恐れず、常に最前線で光輝を放ち続ける覇者である。」"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 md:px-24">
                <KnightLine />
            </div>

            <section className="relative overflow-hidden bg-kog-surface-container-low px-6 py-24 md:px-12 lg:px-24">
                <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-kog-primary/5 blur-[120px]" />
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row-reverse">
                    <div className="w-full lg:w-2/5">
                        <div className="relative aspect-square overflow-hidden border border-kog-primary/10 bg-kog-surface-container-lowest">
                            <img
                                src={KNIGHTS_IMAGES.memberHigaru}
                                alt="副団長ヒガル"
                                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-10 lg:w-3/5">
                        <div className="space-y-2">
                            <p className="font-kog-headline text-2xl font-bold tracking-widest text-kog-primary">
                                副団長 / THE SHIELD
                            </p>
                            <h2 className="font-kog-headline text-5xl font-bold text-kog-on-surface md:text-7xl">
                                ヒガル
                            </h2>
                        </div>
                        <div className="glass-panel border-l-4 border-kog-primary p-10">
                            <p className="font-kog-headline text-2xl leading-relaxed text-kog-on-surface italic md:text-3xl">
                                正体不明の賢者。騎士団の背後を護り、揺るぎない基盤を構築する存在である。その智慧は深淵の如く、語られぬ真理を以て大業を支え続けている。
                            </p>
                        </div>
                        <p className="max-w-2xl text-lg leading-relaxed text-kog-on-surface-variant">
                            公にその姿を現すことは稀であるが、彼の不在において騎士団の安定はあり得ない。影の中から光を操る、秩序の真の構築者である。
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-kog-surface px-6 py-24 md:px-12 lg:px-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
                    <div className="group relative w-full lg:w-1/2">
                        <div className="absolute -inset-4 border border-kog-primary/20 transition-all duration-500 group-hover:inset-0 group-hover:border-kog-primary/50" />
                        <div className="aspect-[4/5] overflow-hidden bg-kog-surface-container-highest grayscale transition-all duration-700 group-hover:grayscale-0">
                            <img
                                src={KNIGHTS_IMAGES.memberTakumi}
                                alt="ライス・フィールド"
                                className="h-full w-full scale-110 object-cover transition-transform duration-1000 group-hover:scale-100"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-12 lg:w-1/2">
                        <div>
                            <p className="mb-2 font-kog-headline text-2xl font-bold text-kog-primary">
                                リーダー / THE STRATEGIST
                            </p>
                            <h2 className="mb-4 font-kog-headline text-5xl leading-none font-bold tracking-tighter md:text-6xl">
                                ライス・フィールド
                            </h2>
                            <div className="h-1 w-24 bg-kog-primary" />
                        </div>
                        <div className="space-y-8">
                            <QuoteBlock
                                icon="lightbulb"
                                text="「ライバー事務所の立ち上げを主導し、瞬く間に売上20億を達成。混沌とした市場から新たな価値を掘り起こす、新規事業のエキスパートである。」"
                            />
                            <QuoteBlock
                                icon="explore"
                                text="「その卓越した知略は、騎士団の進むべき航路を黄金の光で照らし出す。不可能を可能に変える戦略の具現者。」"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-6 md:px-24">
                <KnightLine />
            </div>

            <section className="relative overflow-hidden bg-kog-surface-container-low px-6 py-24 md:px-12 lg:px-24">
                <div className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-kog-primary/5 blur-[120px]" />
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row-reverse">
                    <div className="w-full lg:w-2/5">
                        <div className="relative aspect-square overflow-hidden border border-kog-primary/10 bg-kog-surface-container-lowest">
                            <img
                                src={KNIGHTS_IMAGES.memberPupu}
                                alt="ププ"
                                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-10 lg:w-3/5">
                        <div className="space-y-2">
                            <p className="font-kog-headline text-2xl font-bold tracking-widest text-kog-primary">
                                鼓笛隊 / THE DRUMMER
                            </p>
                            <h2 className="font-kog-headline text-5xl font-bold md:text-7xl">
                                ププ
                            </h2>
                        </div>
                        <div className="glass-panel border-l-4 border-kog-primary p-10">
                            <p className="font-kog-headline text-2xl leading-relaxed text-kog-on-surface italic md:text-3xl">
                                「セールスの極致を体現し、最前線で新たな市場を切り拓く。その情熱は軍勢を鼓舞し、不可能を可能にする。」
                            </p>
                        </div>
                        <QuoteBlock
                            icon="campaign"
                            text="「百戦錬磨の経験に基づき、騎士団の価値を世界へ轟かせる、比類なき交渉の体現者。」"
                        />
                    </div>
                </div>
            </section>

            <div className="px-6 md:px-24">
                <KnightLine />
            </div>

            <section className="bg-kog-surface px-6 py-24 md:px-12 lg:px-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 space-y-4 text-center">
                        <h3 className="font-kog-headline text-3xl font-bold tracking-tight text-kog-primary md:text-5xl">
                            団員の集結は間近
                        </h3>
                        <KnightLine className="mx-auto max-w-md opacity-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-10">
                        {CLASSIFIED_MEMBERS.map((member) => (
                            <div
                                key={member.name}
                                className="group relative aspect-[3/4] border border-kog-outline-variant/30 bg-kog-surface-container transition-all duration-500 hover:border-kog-primary/50"
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 overflow-hidden bg-kog-surface-container-lowest p-6 text-center">
                                    {'overlay' in member ? (
                                        <div className="relative mb-4 h-24 w-24">
                                            <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-6xl text-kog-primary/20">
                                                {member.icon}
                                            </span>
                                            <span className="material-symbols-outlined absolute inset-0 flex animate-pulse items-center justify-center text-4xl text-kog-primary/40">
                                                {member.overlay}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="material-symbols-outlined text-6xl text-kog-primary/20">
                                            {member.icon}
                                        </span>
                                    )}
                                    <div className="relative z-10 space-y-2">
                                        {/* {'label' in member && (
                                            <p className="font-kog-headline text-xs font-bold tracking-widest text-kog-primary uppercase opacity-80">
                                                {member.label}
                                            </p>
                                        )} */}
                                        <p className="font-kog-headline text-lg font-medium tracking-tighter text-kog-on-surface italic md:text-xl">
                                            {member.name}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-kog-primary transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-kog-surface px-6 py-32 text-center">
                <div className="mx-auto max-w-4xl space-y-12">
                    <h3 className="font-kog-headline text-3xl leading-tight tracking-tight drop-shadow-2xl md:text-5xl lg:text-7xl">
                        選ばれし15の魂。
                        <br className="hidden md:block" />
                        その全てが揃う刻、世界は真の秩序を謳うであろう。
                    </h3>
                    <Link
                        href={SITE_ROUTES.admission}
                        className="inline-block bg-kog-primary px-10 py-5 text-lg font-bold tracking-[0.2em] text-kog-on-primary shadow-2xl shadow-kog-primary/20 transition-all hover:brightness-110"
                    >
                        入団を志願する
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
