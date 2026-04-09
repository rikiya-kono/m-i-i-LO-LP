import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Clock, Coins, CalendarDays, MapPin } from 'lucide-react'

export function Recruit() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} id="recruit" className="py-32 relative bg-[var(--color-secondary)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Recruitment</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        採用情報
                    </h2>
                    <div className="accent-line mt-6" />
                </motion.div>

                <div className="space-y-12">
                    {/* Lawyer */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-card border border-white/5 p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">弁護士</h3>
                        </div>
                        <p className="text-foreground/80 text-sm">
                            現在募集しておりません。
                        </p>
                    </motion.div>

                    {/* Staff */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-card border border-white/5 p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">事務員 <span className="text-sm text-[var(--color-primary)] font-normal ml-2">募集中</span></h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left column */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-2">募集人員</p>
                                    <p className="text-sm text-foreground/80">
                                        正規事務職員 若干名（試用期間3ヶ月）
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-2">職務内容</p>
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                        書類作成補助、データ入力、電話対応、接客、清掃、裁判所・法務局への外出等の弁護士秘書および事務補助の業務
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-2">採用条件</p>
                                    <ul className="text-sm text-foreground/80 space-y-1">
                                        <li>・Word・Excel スキル必須</li>
                                        <li>・新卒・中途採用歓迎</li>
                                        <li>・長期勤務意欲のある方</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-6">
                                <div className="flex gap-3">
                                    <Clock className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-1">勤務時間</p>
                                        <p className="text-sm text-foreground/80">
                                            9:00〜17:50 または 9:30〜18:20（休憩50分）
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Coins className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-1">給与・待遇</p>
                                        <ul className="text-sm text-foreground/80 space-y-1">
                                            <li>初任給：大卒 218,000円 / ロースクール卒 228,000円</li>
                                            <li>通勤手当 全額支給</li>
                                            <li>住宅手当 25,000円/月</li>
                                            <li>年1回昇給、賞与年2回（年5ヶ月分＋α）</li>
                                            <li>想定年収：370万円以上</li>
                                            <li>社会保険完備</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <CalendarDays className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-1">休日</p>
                                        <p className="text-sm text-foreground/80">
                                            土日祝、夏季3日、年末年始
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Application */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest mb-3">応募方法</p>
                            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                                写真付き自筆履歴書を郵送にてお送りください。
                            </p>
                            <div className="flex gap-3 items-start">
                                <MapPin className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                                <p className="text-sm text-foreground/80">
                                    〒160-0022 東京都新宿区新宿1丁目8番5号 新宿御苑室町ビル5階<br />
                                    三宅・今井・池田法律事務所 宛
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
