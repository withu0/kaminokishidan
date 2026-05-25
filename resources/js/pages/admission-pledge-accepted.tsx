import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteButton } from '@/components/site/site-button';
import { SITE_ROUTES } from '@/config/site-navigation';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

type Props = {
    reference: string;
};

export default function AdmissionPledgeAccepted({ reference }: Props) {
    return (
        <SiteLayout>
            <KnightsHead title="誓約の受理 | 株式会社神の騎士団" />

            <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden px-6 pt-8 pb-24">
                <div className="absolute inset-0 z-0" aria-hidden>
                    <div className="absolute inset-0 z-10 bg-kog-background/60" />
                    <img
                        src={KNIGHTS_IMAGES.oathHero}
                        alt="大聖堂のような聖域の内部"
                        className="h-full w-full object-cover opacity-30 grayscale"
                    />
                </div>

                <div
                    className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(233,195,73,0.08)_0%,rgba(16,20,26,0)_70%)]"
                    aria-hidden
                />

                <section className="relative z-30 flex w-full max-w-4xl flex-col items-center text-center">
                    <div className="group relative mb-12">
                        <div className="absolute inset-0 scale-150 rounded-full bg-kog-primary/20 opacity-50 blur-3xl" />
                        <div className="relative flex h-32 w-32 items-center justify-center border border-kog-primary/30">
                            <span
                                className="material-symbols-outlined text-7xl text-kog-primary"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                shield
                            </span>
                        </div>
                        <KnightLine className="absolute -bottom-4 left-1/2 w-48 -translate-x-1/2" />
                    </div>

                    <h1 className="mb-8 font-kog-headline text-5xl leading-tight font-bold tracking-wider text-kog-primary md:text-7xl">
                        誓約の受理
                    </h1>

                    <div className="mb-16 space-y-6">
                        <p className="mx-auto max-w-2xl font-kog-headline text-xl leading-relaxed text-kog-on-surface-variant italic md:text-2xl">
                            汝の誓約は、確かに聖域へと届けられた。
                        </p>
                        <p className="mx-auto max-w-xl font-kog-body text-sm leading-loose tracking-[0.1em] text-kog-secondary opacity-80 md:text-base">
                            内容を精査し、追って騎士団より電話、または電子書簡にて連絡を差し上げる。
                        </p>
                    </div>

                    <div className="mb-16 w-full border-l-4 border-kog-primary/50 bg-kog-surface-container-low p-8 text-left shadow-2xl">
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <div>
                                <span className="mb-2 block font-kog-body text-[10px] tracking-[0.2em] text-kog-primary uppercase">
                                    Transaction Identity
                                </span>
                                <p className="font-kog-headline text-lg text-kog-on-surface">
                                    Reference: {reference}
                                </p>
                            </div>
                            <div className="hidden h-px w-12 bg-kog-primary/20 md:block" />
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-kog-primary">
                                    verified
                                </span>
                                <span className="font-kog-body text-sm tracking-widest text-kog-on-surface-variant uppercase">
                                    Authenticated Protocol
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <SiteButton asChild size="sm" className="gap-4">
                            <Link href={SITE_ROUTES.home}>
                                神の騎士団の扉を閉じる
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </Link>
                        </SiteButton>
                        <p className="mt-4 font-kog-body text-[9px] tracking-[0.3em] text-kog-on-surface-variant uppercase">
                            Safe Passage Guaranteed
                        </p>
                    </div>

                    <section className="relative mt-24 w-full overflow-hidden px-4 py-24 text-center">
                        <div className="mx-auto max-w-4xl">
                            <KnightLine className="mx-auto mb-12 w-32 opacity-50" />
                            <h2 className="font-kog-headline text-3xl leading-relaxed font-bold tracking-[0.15em] text-white italic md:text-5xl">
                                誓約は神の騎士団のもとに届いた。天命を待て。
                            </h2>
                            <KnightLine className="mx-auto mt-12 w-32 opacity-50" />
                        </div>
                        <div
                            className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kog-primary/5 blur-[100px]"
                            aria-hidden
                        />
                    </section>
                </section>
            </div>
        </SiteLayout>
    );
}
