import { motion } from 'framer-motion'

const paragraphs = [
    '三宅・今井・池田法律事務所（以下、「当事務所」といいます。）は、民法上の組合であることから、社会保障・税番号（マイナンバー）が付与されないため、法人番号の取得が可能な「弁護士法人三宅・今井・池田法律事務所」（以下、「弁護士法人」といいます。）を設立し、弁護士法人を当事務所の請求業務を担当する組合員としました。',
    '今後は、当事務所の組合員たる弁護士法人が弁護士報酬等の請求業務を行うことになります。',
    'なお、弁護士法人を設立しましたが、法律業務の受任は、これまでどおり、当事務所が行うものであり、弁護士法人で法律業務の受任を行うものではありません。また、お支払いいただく弁護士報酬等は従前どおり民法上の組合たる当事務所に帰属しますので、報酬等のお支払い、源泉税の取扱い、振込先等についても変更ございません。',
    '支払調書の記載方法につきましては、以下のとおりとなりますので、よろしくお願い致します。',
]

const paymentDetails = [
    '所在地 東京都新宿区新宿1丁目8番5号 新宿御苑室町ビル5階',
    '名称 三宅・今井・池田法律事務所',
    '法人番号 3011105007348',
]

export function MyNumber() {
    return (
        <section className="relative bg-[#0a0a0a] py-24 md:py-28">
            <div className="container mx-auto max-w-5xl px-6">
                <motion.div
                    className="mb-12 flex items-center gap-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="h-px w-8 bg-primary" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary">My Number</span>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                            請求業務と支払調書の記載方法に関するご案内を掲載しています。
                        </p>
                    </motion.div>

                    <motion.div
                        className="border border-white/10 bg-card/60 p-8 backdrop-blur-sm md:p-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="space-y-5 text-sm leading-8 text-foreground/80">
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-10 border-t border-white/10 pt-8">
                            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
                                支払を受ける者欄の記載方法
                            </p>
                            <div className="space-y-3 text-sm leading-7 text-foreground/85">
                                {paymentDetails.map((detail) => (
                                    <p key={detail}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
