import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { committees } from '../data/content'
import { Calendar, Users, Award } from 'lucide-react'

export function About() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const stats = [
        { icon: Calendar, value: '1972', label: '設立年' },
        { icon: Award, value: '50+', label: '年以上の歴史' },
        { icon: Users, value: '13', label: '名の弁護士' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-secondary)]/30 to-[var(--color-background)]" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">当事務所について</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Left column - Description */}
                    <div className="space-y-8">
                        <motion.p
                            variants={itemVariants}
                            className="text-[var(--color-muted-foreground)] leading-relaxed text-lg"
                        >
                            三宅・今井・池田法律事務所は、1972年の設立以来、企業法務、特に倒産・事業再生分野を中心に業務を行ってまいりました。
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-[var(--color-muted-foreground)] leading-relaxed">
                            規模の拡大を追求するのではなく、少数精鋭のチームとして緊密に連携し、依頼者にとって最適な解決策を提供することを信条としています。
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-[var(--color-muted-foreground)] leading-relaxed">
                            会社更生、民事再生、破産といった法的整理手続のほか、私的整理や事業再生ADRにおいても、管財人・監督委員・申立代理人・債権者代理人など様々な立場で関与してきました。
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 pt-8"
                        >
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center py-6 bg-[var(--color-card)]/50">
                                    <CardContent className="p-0">
                                        <stat.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-3" />
                                        <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                                        <div className="text-xs text-[var(--color-muted-foreground)] mt-1">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right column - Committee activities */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-8 bg-[var(--color-card)]/40">
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">主な委員会活動</h3>
                            <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
                                所属弁護士は各種公的委員会・ワーキンググループの委員を務めています。
                            </p>
                            <div className="space-y-4">
                                {committees.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-4 items-start group p-3 -mx-3 rounded-lg hover:bg-[var(--color-secondary)]/50 transition-colors"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <span className="text-xs text-[var(--color-primary)] font-medium min-w-[70px] pt-0.5 shrink-0">{item.year}</span>
                                        <span className="text-sm text-[var(--color-muted-foreground)] group-hover:text-[var(--color-foreground)] transition-colors">{item.role}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
