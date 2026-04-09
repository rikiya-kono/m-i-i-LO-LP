import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export type LegalPage = 'terms' | 'disclaimer' | 'privacy' | null

type Props = {
    page: LegalPage
    onClose: () => void
}

type Section = { heading: string; body: string | string[] }

const CONTENT: Record<NonNullable<LegalPage>, { title: string; sections: Section[] }> = {
    terms: {
        title: 'サイト利用について',
        sections: [
            {
                heading: '著作権',
                body: '当サイト内に掲載されているコンテンツ（文書、画像、映像、プログラム等を含む）の著作権は、当事務所またはその作成者に帰属します。著作権者の書面による事前承諾なく、複製・転載・改変・再配布することを禁じます。',
            },
            {
                heading: 'リンクについて',
                body: '当サイトへのリンクを設定される場合は、事前に当事務所へお問い合わせのうえ、書面による承諾を得てください。リンクの内容やウェブサイトの性質等によっては、お断りする場合がございます。',
            },
            {
                heading: '推奨環境',
                body: '当サイトをご利用いただくには、JavaScript を有効にしてください。最新バージョンのブラウザ（Chrome、Firefox、Safari 等）での閲覧を推奨します。',
            },
        ],
    },
    disclaimer: {
        title: '免責事項',
        sections: [
            {
                heading: '情報の正確性',
                body: '当事務所は、当サイトのコンテンツの正確性の確保に努めておりますが、提供する情報に関し、いかなる保証もするものではありません。コンテンツは予告なしに変更または削除されることがあります。',
            },
            {
                heading: '法的アドバイスの非提供',
                body: '当サイトに掲載されている情報は一般的な情報提供を目的としたものであり、法的アドバイスを提供するものではありません。個別の法律問題については、当事務所または弁護士に直接ご相談ください。',
            },
            {
                heading: '損害の免責',
                body: '当サイトの利用により何らかの損害が生じたとしても、当事務所は一切の責任を負いません。利用者ご自身の責任においてご利用ください。',
            },
        ],
    },
    privacy: {
        title: 'プライバシーポリシー',
        sections: [
            {
                heading: '基本方針',
                body: '三宅・今井・池田法律事務所は、「個人情報の保護に関する法律」およびその他関連法令を遵守し、個人情報の適切な取得・利用・管理に努めます。',
            },
            {
                heading: '個人情報の利用目的',
                body: [
                    '依頼案件の処理およびこれに付随する連絡',
                    'セミナー・研究会の案内状の送付',
                    '採用関連の事務連絡および選考手続',
                    '事務所業務の円滑な遂行',
                ],
            },
            {
                heading: '第三者への提供',
                body: 'ご本人の同意なく、業務委託先以外の第三者に個人情報を開示・提供することはありません。不正アクセスや漏洩を防ぐため、適切なセキュリティ対策を講じています。',
            },
            {
                heading: '開示・訂正の請求',
                body: '個人情報の照会・訂正・削除等のご請求については、本人確認のうえ、個人情報保護法の定めに従い対応いたします。',
            },
            {
                heading: 'お問い合わせ',
                body: '〒160-0022 東京都新宿区新宿1丁目8番5号 新宿御苑室町ビル5階\n三宅・今井・池田法律事務所\n電話：03-3356-5251（平日 9:30〜17:30）',
            },
        ],
    },
}

const TABS: { key: NonNullable<LegalPage>; label: string }[] = [
    { key: 'terms', label: 'サイト利用について' },
    { key: 'disclaimer', label: '免責事項' },
    { key: 'privacy', label: 'プライバシーポリシー' },
]

export function LegalModal({ page, onClose }: Props) {
    const [activeTab, setActiveTab] = useState<NonNullable<LegalPage>>(page ?? 'terms')

    // ページが変わったらタブを同期
    useEffect(() => {
        if (page) setActiveTab(page)
    }, [page])

    useEffect(() => {
        if (page) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
        return () => { document.body.style.overflow = '' }
    }, [page])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    const data = CONTENT[activeTab]

    return (
        <AnimatePresence>
            {page && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-full max-w-2xl max-h-[80vh] bg-[#0e0e0e] border border-white/10 flex flex-col pointer-events-auto"
                            initial={{ scale: 0.96, y: 16 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.96, y: 8 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-8 pt-8 pb-0 shrink-0">
                                <p className="text-[9px] font-sans tracking-[0.4em] text-primary/70 uppercase">Legal Information</p>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-white/10 hover:border-white/30"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-0 border-b border-white/10 mt-6 px-8 shrink-0">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        className={`text-xs tracking-wide pb-3 mr-6 border-b-2 transition-all duration-200 ${
                                            activeTab === tab.key
                                                ? 'border-primary text-foreground'
                                                : 'border-transparent text-muted-foreground hover:text-foreground/70'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto px-8 py-8 flex-1">
                                <h2 className="font-mincho text-xl text-foreground mb-8">{data.title}</h2>
                                <div className="space-y-8">
                                    {data.sections.map((sec) => (
                                        <section key={sec.heading}>
                                            <h3 className="text-xs font-medium text-primary uppercase tracking-widest mb-3 flex items-center gap-3">
                                                <span className="w-4 h-px bg-primary" />
                                                {sec.heading}
                                            </h3>
                                            {Array.isArray(sec.body) ? (
                                                <ul className="space-y-1.5">
                                                    {sec.body.map((item) => (
                                                        <li key={item} className="text-sm text-foreground/80 leading-relaxed flex gap-2">
                                                            <span className="text-primary/60 shrink-0">·</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{sec.body}</p>
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
