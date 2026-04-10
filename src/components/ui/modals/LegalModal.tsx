import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export type LegalPage = 'terms' | 'disclaimer' | 'privacy' | null

type Props = {
    page: LegalPage
    onClose: () => void
}

type Section = { heading: string; body: string | string[] }

const CONTENT: Record<NonNullable<LegalPage>, { title: string; sections: Section[] }> = {
    privacy: {
        title: 'プライバシーポリシー',
        sections: [
            {
                heading: 'プライバシーポリシー',
                body: '三宅・今井・池田法律事務所（以下「当事務所」といいます。）は、当事務所における個人情報の取扱に関し、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）、その他の関係法令を遵守し、かつ以下のとおりプライバシーポリシーを定め、これを遵守致します。',
            },
            {
                heading: '個人情報の取得',
                body: '当事務所は、個人情報を利用目的の達成に必要な範囲で、適正に取得します。',
            },
            {
                heading: '個人情報の利用目的',
                body: [
                    '当事務所は、ご本人の事前の同意がある場合、又は法令により認められている場合でない限り、以下の目的の達成に必要な範囲でのみ、個人情報を利用します。',
                    '依頼案件の処理及びこれに付随する連絡',
                    '当事務所主催の研究会及びセミナーの案内状、挨拶状・年賀状等の送付',
                    '採用に関する事務連絡、選考手続',
                    'その他、当事務所の業務の適切かつ円滑な遂行',
                ],
            },
            {
                heading: '個人情報の管理',
                body: '当事務所は、取得した個人情報について、不正アクセス・紛失・破損・改ざん・漏洩などがないように適切に管理します。また、当事務所は、ご本人の同意を得ることなく、業務委託先以外の第三者に開示致しません。',
            },
            {
                heading: '個人情報の安全対策',
                body: '当事務所は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。',
            },
            {
                heading: '個人情報の開示及び訂正のお求め',
                body: 'ご本人から個人情報の照会、開示及び訂正などのご請求があった場合には、ご希望される場合には、ご本人であることを確認の上、個人情報保護法に従い、適切に対応させていただきますので、以下のお問い合わせ先宛ご連絡下さい。',
            },
            {
                heading: 'マイナンバーについて',
                body: '三宅・今井・池田法律事務所（以下、「当事務所」といいます。）は、民法上の組合であることから、社会保障・税番号（マイナンバー）が付与されないため、法人番号の取得が可能な「弁護士法人三宅・今井・池田法律事務所」（以下、「弁護士法人」といいます。）を設立し、弁護士法人を当事務所の請求業務を担当する組合員としました。\n今後は、当事務所の組合員たる弁護士法人が弁護士報酬等の請求業務を行うことになります。\nなお、弁護士法人を設立しましたが、法律業務の受任は、これまでどおり、当事務所が行うものであり、弁護士法人で法律業務の受任を行うものではありません。また、お支払いいただく弁護士報酬等は従前どおり民法上の組合たる当事務所に帰属しますので、報酬等のお支払い、源泉税の取扱い、振込先等についても変更ございません。\n支払調書の記載方法につきましては、以下のとおりとなりますので、よろしくお願い致します。\n\n【支払を受ける者】欄の記載方法\n所 在 地　東京都新宿区新宿１丁目８番５号　新宿御苑室町ビル５階\n名　　称　三宅・今井・池田法律事務所\n法人番号　３０１１１０５００７３４８',
            },
            {
                heading: 'お問い合せ',
                body: '当事務所の個人情報の取扱に関するお問い合せは下記までご連絡ください（お電話での受付時間は、平日午前9:30～17:30）。\n\n住所　東京都新宿区新宿１丁目８番５号　新宿御苑室町ビル５階\n\nTEL:03-3356-5251 FAX:03-3356-5255',
            },
            {
                heading: 'プライバシーポリシーの変更',
                body: '当事務所は、本プライバシーポリシーを事前の通知なく、必要に応じて変更することがあります。',
            },
        ],
    },
    disclaimer: {
        title: '免責事項',
        sections: [
            {
                heading: '免責事項',
                body: '当サイトは、三宅・今井・池田法律事務所（以下「当事務所」といいます。）が運営しております。当サイトの利用に当たっては、下記の免責事項をお読み下さい。当サイトを利用された場合は、下記の事項に同意したものとみなします。',
            },
            {
                heading: 'ご利用上の留意事項',
                body: '当事務所は、当サイトのコンテンツの正確性の確保に努めておりますが、提供する情報に関し、いかなる保証もするものではありません。また、当事務所は、当サイトを通じて、当サイトの利用者の皆様に法的アドバイスをするものでもありません。\nしたがって、当サイトの利用により何らかの損害が利用者の皆様に生じたとしても、当事務所は一切の責任を負いません。',
            },
            {
                heading: '変更について',
                body: 'なお、当サイトのコンテンツは、予告なしに変更又は削除されることがあります。',
            },
        ],
    },
    terms: {
        title: 'サイトのご利用について',
        sections: [
            {
                heading: 'サイトのご利用について',
                body: '当サイトは、三宅・今井・池田法律事務所（以下「当事務所」といいます。）が運営しております。当サイトの利用に当たっては、下記のご利用条件等をお読み下さい。当サイトを利用された場合は、下記事項に同意したものとみなします。なお、本ページの記載内容は、予告なしに変更する場合があります。',
            },
            {
                heading: '著作権について',
                body: '当サイト内に掲載されているコンテンツ（文書、画像、映像、プログラム当を含む）の著作権は、当事務所又はその作成者に帰属します。これらのコンテンツについて、当事務所の事前の書面による承諾なく、複製、転用及び改変等をすることを禁止します。',
            },
            {
                heading: '推奨環境について',
                body: 'OS\nWindows7/8/vista\nブラウザ\nInternet Explorer　8.x　9.x　10.x　11.x （互換表示での閲覧は非推奨環境となります）\nFirefox　最新版\nSafari　最新版\nGoogle Chrome 最新版\nJava Script',
            },
            {
                heading: 'リンクについて',
                body: '当サイトには、第三者の運営するウェブサイトにリンクが設定されている場合がありますが、当事務所は、リンク先のウェブサイトの内容を保証するものではなく、当該ウェブサイトを推奨するものでもありません。\n\n当サイトは、リンクフリーではありません。当サイトへのリンクの設定を希望される方は、当事務所にお問い合わせの上、事前の書面による承諾を得てから、リンクを設定下さいますようお願い致します。なお、リンク元のWebサイトの内容、リンクの方法によっては、リンクをお断りする場合がありますので、ご了承下さいますようお願い致します。',
            },
        ],
    },
}

const TABS: { key: NonNullable<LegalPage>; label: string }[] = [
    { key: 'privacy', label: 'プライバシーポリシー' },
    { key: 'disclaimer', label: '免責事項' },
    { key: 'terms', label: 'サイトのご利用について' },
]

export function LegalModal({ page, onClose }: Props) {
    const [activeTab, setActiveTab] = useState<NonNullable<LegalPage>>(page ?? 'privacy')

    useEffect(() => {
        if (page) setActiveTab(page)
    }, [page])

    useEffect(() => {
        if (page) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [page])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    const data = CONTENT[activeTab]

    return (
        <AnimatePresence>
            {page && (
                <>
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="pointer-events-auto flex max-h-[80vh] w-full max-w-2xl flex-col border border-white/10 bg-[#0e0e0e]"
                            initial={{ scale: 0.96, y: 16 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.96, y: 8 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="shrink-0 px-8 pt-8 pb-0">
                                <div className="flex items-center justify-between">
                                    <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary/70">Legal Information</p>
                                    <button
                                        onClick={onClose}
                                        className="flex h-8 w-8 items-center justify-center border border-white/10 text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 flex shrink-0 gap-0 border-b border-white/10 px-8">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        className={`mr-6 border-b-2 pb-3 text-xs tracking-wide transition-all duration-200 ${
                                            activeTab === tab.key
                                                ? 'border-primary text-foreground'
                                                : 'border-transparent text-muted-foreground hover:text-foreground/70'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 overflow-y-auto px-8 py-8">
                                <h2 className="mb-8 font-mincho text-xl text-foreground">{data.title}</h2>
                                <div className="space-y-8">
                                    {data.sections.map((sec) => (
                                        <section key={sec.heading}>
                                            <h3 className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-primary">
                                                <span className="h-px w-4 bg-primary" />
                                                {sec.heading}
                                            </h3>
                                            {Array.isArray(sec.body) ? (
                                                <ul className="space-y-1.5">
                                                    {sec.body.map((item) => (
                                                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                                                            <span className="shrink-0 text-primary/60">・</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/80">{sec.body}</p>
                                            )}
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
