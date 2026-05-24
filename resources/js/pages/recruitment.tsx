import { Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { KnightLine } from '@/components/site/knight-line';
import { KnightsHead } from '@/components/site/knights-head';
import { SiteFooter } from '@/components/site/site-footer';
import { KNIGHTS_IMAGES } from '@/constants/knights-images';
import SiteLayout from '@/layouts/site-layout';
import { store as submitContact } from '@/routes/contact';

const INQUIRY_TYPES = [
    { value: 'recruitment', label: '採用について' },
    { value: 'business', label: '事業に関するご相談' },
    { value: 'press', label: '広報・取材について' },
    { value: 'other', label: 'その他' },
] as const;

const POSITIONS = [
    {
        span: 'md:col-span-8',
        variant: 'large-left' as const,
        tag: 'Strategic Leadership',
        title: 'プロジェクトマネージャー',
        description:
            'ビジョンを形にし、チームを勝利へと導く。戦略的思考と確固たる決断力を持つリーダーを募集します。',
        cta: 'VIEW DETAILS',
        align: 'left' as const,
    },
    {
        span: 'md:col-span-4',
        variant: 'small' as const,
        tag: 'Engineering',
        title: 'シニアエンジニア',
        description:
            '堅牢なシステムを構築し、最高水準の技術で基盤を支える開拓者。',
        cta: 'Apply Now',
        align: 'left' as const,
    },
    {
        span: 'md:col-span-4',
        variant: 'small' as const,
        tag: 'Design',
        title: 'クリエイティブディレクター',
        description:
            '美しさと機能性を融合させ、騎士団のアイデンティティを視覚化する表現者。',
        cta: 'Apply Now',
        align: 'left' as const,
    },
    {
        span: 'md:col-span-8',
        variant: 'large-right' as const,
        tag: 'Operations',
        title: 'オペレーションスペシャリスト',
        description:
            '組織の円滑な運営を支え、全ての騎士が最大限のパフォーマンスを発揮できる環境を整える要石。',
        cta: 'VIEW DETAILS',
        align: 'right' as const,
    },
] as const;

type Props = {
    contactStatus?: 'sent' | 'error';
};

export default function Recruitment({ contactStatus }: Props) {
    return (
        <SiteLayout>
            <KnightsHead title="採用情報 | 株式会社神の騎士団" />

            {/* Hero */}
            <section className="relative flex min-h-[min(819px,70dvh)] items-center justify-center overflow-hidden lg:min-h-[819px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src={KNIGHTS_IMAGES.recruitmentHero}
                        alt="鋭角の建築空間に差し込むドラマチックな金色の光"
                        className="h-full w-full object-cover opacity-40 contrast-125 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kog-background via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center">
                    <span className="mb-4 inline-block font-kog-headline text-sm tracking-[0.3em] text-kog-primary uppercase">
                        Join Our Order
                    </span>
                    <h1 className="mb-8 font-kog-headline text-4xl leading-tight font-black tracking-tight text-kog-on-surface md:text-5xl lg:text-7xl">
                        共に高みを
                        <br />
                        目指す騎士を募集します
                    </h1>
                    <KnightLine className="mx-auto mb-8 w-48" />
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-kog-on-surface-variant md:text-xl">
                        伝統を重んじ、革新を恐れない。私たちは、不変の価値を現代に再定義する「神の騎士団」の一員を求めています。
                    </p>
                </div>
            </section>

            {/* Positions */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:py-32">
                <h2 className="mb-16 text-center font-kog-headline text-3xl tracking-widest text-kog-primary lg:text-4xl">
                    募集職種
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {POSITIONS.map((position) => (
                        <div
                            key={position.title}
                            className={`${position.span} ${
                                position.variant === 'small'
                                    ? 'bg-kog-surface-container-high p-8 transition-transform duration-300 hover:-translate-y-1'
                                    : position.variant === 'large-right'
                                      ? 'group border-r-4 border-kog-primary bg-kog-surface-container-low p-10 text-right transition-colors duration-500 hover:bg-kog-surface-container'
                                      : 'group border-l-4 border-kog-primary bg-kog-surface-container-low p-10 transition-colors duration-500 hover:bg-kog-surface-container'
                            }`}
                        >
                            <div
                                className={`flex h-full flex-col justify-between ${
                                    position.align === 'right'
                                        ? 'items-end'
                                        : ''
                                }`}
                            >
                                <div
                                    className={
                                        position.align === 'right'
                                            ? 'w-full'
                                            : ''
                                    }
                                >
                                    <span
                                        className={`mb-4 block text-xs tracking-widest uppercase ${
                                            position.variant === 'small'
                                                ? 'font-bold text-kog-primary'
                                                : 'font-kog-headline text-kog-primary-fixed-dim'
                                        }`}
                                    >
                                        {position.tag}
                                    </span>
                                    <h3
                                        className={`mb-4 font-kog-headline text-kog-on-surface ${
                                            position.variant === 'small'
                                                ? 'text-xl'
                                                : 'mb-6 text-3xl'
                                        }`}
                                    >
                                        {position.title}
                                    </h3>
                                    <p
                                        className={`leading-relaxed text-kog-on-surface-variant ${
                                            position.variant === 'small'
                                                ? 'mb-6 text-sm'
                                                : 'mb-8 max-w-xl text-base'
                                        } ${position.align === 'right' ? 'ml-auto' : ''}`}
                                    >
                                        {position.description}
                                    </p>
                                </div>

                                {position.cta === 'VIEW DETAILS' ? (
                                    <button
                                        type="button"
                                        className={`flex cursor-pointer items-center gap-4 font-bold tracking-tighter text-kog-primary transition-transform ${
                                            position.align === 'right'
                                                ? 'group-hover:-translate-x-2'
                                                : 'group-hover:translate-x-2'
                                        }`}
                                    >
                                        {position.align === 'right' && (
                                            <span className="material-symbols-outlined">
                                                west
                                            </span>
                                        )}
                                        {position.cta}
                                        {position.align === 'left' && (
                                            <span className="material-symbols-outlined">
                                                trending_flat
                                            </span>
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="cursor-pointer text-xs font-bold tracking-widest text-kog-primary uppercase hover:underline"
                                    >
                                        {position.cta}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="relative overflow-hidden bg-kog-surface-container-lowest py-24 lg:py-32"
            >
                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 font-kog-headline text-3xl text-kog-on-surface lg:text-4xl">
                            お問い合わせ
                        </h2>
                        <p className="font-light text-kog-on-surface-variant">
                            新たな一歩を踏み出す準備はできていますか？
                        </p>
                        <KnightLine className="mx-auto mt-6 w-24" />
                    </div>

                    {contactStatus === 'sent' && (
                        <p
                            role="status"
                            className="mb-8 border border-kog-primary/30 bg-kog-primary/10 px-6 py-4 text-center text-sm text-kog-on-surface"
                        >
                            お問い合わせを送信しました。担当者より折り返しご連絡いたします。
                        </p>
                    )}

                    {contactStatus === 'error' && (
                        <p
                            role="alert"
                            className="mb-8 border border-red-500/30 bg-red-500/10 px-6 py-4 text-center text-sm text-red-200"
                        >
                            送信に失敗しました。時間をおいて再度お試しください。
                        </p>
                    )}

                    <Form
                        {...submitContact.form()}
                        resetOnSuccess
                        options={{ preserveScroll: true }}
                        className="space-y-8"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="ml-1 text-xs font-bold tracking-[0.2em] text-kog-primary uppercase"
                                        >
                                            Full Name / お名前
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="KNIGHT NAME"
                                            className="w-full border-0 border-b border-kog-outline-variant bg-kog-surface p-4 text-kog-on-surface transition-colors placeholder:text-kog-on-surface-variant/30 focus:border-kog-primary focus:ring-0"
                                        />
                                        <InputError message={errors.name} />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="ml-1 text-xs font-bold tracking-[0.2em] text-kog-primary uppercase"
                                        >
                                            Email Address / メールアドレス
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="EMAIL@EXAMPLE.COM"
                                            className="w-full border-0 border-b border-kog-outline-variant bg-kog-surface p-4 text-kog-on-surface transition-colors placeholder:text-kog-on-surface-variant/30 focus:border-kog-primary focus:ring-0"
                                        />
                                        <InputError message={errors.email} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="inquiry_type"
                                        className="ml-1 text-xs font-bold tracking-[0.2em] text-kog-primary uppercase"
                                    >
                                        Inquiry Type / お問い合わせ内容
                                    </label>
                                    <select
                                        id="inquiry_type"
                                        name="inquiry_type"
                                        required
                                        defaultValue="recruitment"
                                        className="w-full border-0 border-b border-kog-outline-variant bg-kog-surface p-4 text-kog-on-surface transition-colors focus:border-kog-primary focus:ring-0"
                                    >
                                        {INQUIRY_TYPES.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.inquiry_type} />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="ml-1 text-xs font-bold tracking-[0.2em] text-kog-primary uppercase"
                                    >
                                        Message / メッセージ
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="YOUR MESSAGE..."
                                        className="w-full border-0 border-b border-kog-outline-variant bg-kog-surface p-4 text-kog-on-surface transition-colors placeholder:text-kog-on-surface-variant/30 focus:border-kog-primary focus:ring-0"
                                    />
                                    <InputError message={errors.message} />
                                </div>

                                <div className="flex justify-center pt-8">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group relative overflow-hidden bg-kog-primary px-12 py-5 font-bold tracking-[0.3em] text-kog-on-primary uppercase transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <span className="relative z-10">
                                            {processing ? 'Sending...' : 'Send Message'}
                                        </span>
                                        <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                                    </button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                <span
                    className="material-symbols-outlined pointer-events-none absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 text-[20rem] text-kog-primary opacity-[0.02] select-none lg:text-[40rem]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                >
                    shield
                </span>
            </section>

            <SiteFooter variant="extended" />
        </SiteLayout>
    );
}
