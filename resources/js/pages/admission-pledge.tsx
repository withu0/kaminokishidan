import InputError from '@/components/input-error';
import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteButton } from '@/components/site/site-button';
import { SITE_ROUTES } from '@/config/site-navigation';
import SiteLayout from '@/layouts/site-layout';
import { Form } from '@inertiajs/react';

function PledgeField({
    id,
    label,
    labelEn,
    type,
    placeholder,
    error,
}: {
    id: string;
    label: string;
    labelEn: string;
    type: string;
    placeholder: string;
    error?: string;
}) {
    return (
        <div className="group relative">
            <label
                htmlFor={id}
                className="mb-3 block text-xs font-bold tracking-[0.2em] text-kog-primary uppercase transition-colors group-focus-within:text-white"
            >
                {label}{' '}
                <span className="text-kog-primary/50">({labelEn})</span>
            </label>
            <input
                id={id}
                name={id}
                type={type}
                required
                placeholder={placeholder}
                className="w-full border-b border-kog-primary/20 bg-kog-surface-container-lowest p-4 text-kog-on-surface transition-all placeholder:text-kog-on-surface-variant/30 focus:border-kog-primary focus:ring-0"
            />
            <div className="absolute bottom-0 left-0 h-px w-0 bg-kog-primary transition-all duration-500 group-focus-within:w-full" />
            <InputError message={error} className="mt-2" />
        </div>
    );
}

export default function AdmissionPledge() {
    return (
        <SiteLayout>
            <KnightsHead title="聖なる面談の申し込み | 株式会社神の騎士団" />

            <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden px-4 pt-16 pb-24">
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                    <div className="absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-kog-primary/5 blur-[120px]" />
                    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-kog-surface-container blur-[100px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-2xl">
                    <header className="mb-16 text-center">
                        <span className="mb-6 inline-block border border-kog-primary/30 px-4 py-1 text-xs font-bold tracking-[0.3em] text-kog-primary uppercase">
                            Sacred Application
                        </span>
                        <h1 className="mb-6 font-kog-headline text-4xl font-bold tracking-wider text-kog-on-surface md:text-5xl">
                            聖なる面談の申し込み
                        </h1>
                        <KnightLine className="mx-auto mb-6 w-48" />
                        <p className="mx-auto max-w-lg font-kog-headline text-lg leading-relaxed text-kog-on-surface-variant italic">
                            「この提出は、新たなる秩序への第一歩であり、後戻りのできぬ神聖な誓いである。」
                        </p>
                    </header>

                    <div className="glass-panel relative border border-kog-primary/20 p-8 shadow-2xl md:p-12">
                        <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-kog-primary/40" />
                        <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-kog-primary/40" />

                        <Form
                            action={SITE_ROUTES.admissionPledge}
                            method="post"
                            className="space-y-10"
                            options={{ preserveScroll: true }}
                        >
                            {({ processing, errors }) => (
                                <>
                                    <PledgeField
                                        id="full_name"
                                        label="氏名"
                                        labelEn="Full Name"
                                        type="text"
                                        placeholder="汝の名を刻め"
                                        error={errors.full_name}
                                    />
                                    <PledgeField
                                        id="company"
                                        label="貴社名"
                                        labelEn="Company Name"
                                        type="text"
                                        placeholder="所属せし組織の名"
                                        error={errors.company}
                                    />
                                    <PledgeField
                                        id="email"
                                        label="連絡先アドレス"
                                        labelEn="Contact Email"
                                        type="email"
                                        placeholder="member@kaminokishidan.jp"
                                        error={errors.email}
                                    />
                                    <PledgeField
                                        id="phone"
                                        label="電話番号"
                                        labelEn="Phone Number"
                                        type="tel"
                                        placeholder="000-0000-0000"
                                        error={errors.phone}
                                    />

                                    <div className="pt-8">
                                        <p className="mb-6 text-center text-[10px] leading-relaxed tracking-widest text-kog-on-surface-variant/60 uppercase">
                                            我らは沈黙を重んじ、汝の真実を永遠に守護することを誓う。
                                            <br />
                                            この意志が揺らぐことなきよう、心して挑め。
                                        </p>
                                        <SiteButton
                                            type="submit"
                                            size="full"
                                            disabled={processing}
                                            className="text-sm hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(233,195,73,0.4)]"
                                        >
                                            <span className="relative z-10">
                                                {processing
                                                    ? '提出中...'
                                                    : '誓約書を提出する'}
                                            </span>
                                            <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                                        </SiteButton>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>

            <section className="relative overflow-hidden px-4 py-24 text-center">
                <div className="mx-auto max-w-4xl">
                    <KnightLine className="mx-auto mb-12 w-32 opacity-50" />
                    <h2 className="font-kog-headline text-3xl leading-relaxed font-bold text-white italic md:text-5xl">
                        聖なる契により新たな高みを登頂せよ
                    </h2>
                    <KnightLine className="mx-auto mt-12 w-32 opacity-50" />
                </div>
                <div
                    className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kog-primary/5 blur-[100px]"
                    aria-hidden
                />
            </section>
        </SiteLayout>
    );
}
