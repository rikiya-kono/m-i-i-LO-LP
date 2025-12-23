import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { committees } from '../data/content'

export function About() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const stats = [
        { value: '1972', label: '設立' },
        { value: '50+', label: '年の歴史' },
        { value: '13', label: '名の弁護士' },
    ]

    return (
        <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header - AMT style */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">About Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        当事務所について
                    </h2>
                    <div className="accent-line mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left column - Description */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p className="text-xl leading-relaxed text-[var(--color-foreground)]">
                            三宅・今井・池田法律事務所は、1972年の設立以来、企業法務、特に倒産・事業再生分野を中心に業務を行ってまいりました。
                        </p>

                        <p className="text-subtitle">
                            規模の拡大を追求するのではなく、少数精鋭のチームとして緊密に連携し、依頼者にとって最適な解決策を提供することを信条としています。
                        </p>

                        <p className="text-subtitle">
                            会社更生、民事再生、破産といった法的整理手続のほか、私的整理や事業再生ADRにおいても、管財人・監督委員・申立代理人・債権者代理人など様々な立場で関与してきました。
                        </p>

                        {/* Stats - Minimal style */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--color-border)]">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-muted-foreground)] mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column - Committee activities */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="bg-[var(--color-secondary)] p-10 rounded-none">
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
                                主な委員会活動
                            </h3>
                            <p className="text-sm text-[var(--color-muted-foreground)] mb-8">
                                所属弁護士は各種公的委員会・ワーキンググループの委員を務めています。
                            </p>
                            <div className="space-y-4">
                                {committees.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-6 items-start py-4 border-b border-[var(--color-border)] last:border-b-0"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <span className="text-sm font-medium text-[var(--color-primary)] min-w-[80px] shrink-0">
                                            {item.year}
                                        </span>
                                        <span className="text-sm text-[var(--color-muted-foreground)]">
                                            {item.role}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
