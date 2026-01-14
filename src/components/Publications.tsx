import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { publications } from '../data/content'
import { BookOpen } from 'lucide-react'

export function Publications() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="publications" className="py-32 relative bg-background">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Publications</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        著作関係
                    </h2>
                    <div className="accent-line mt-6" />
                </motion.div>

                {/* Publications list */}
                <div className="space-y-0">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                            className="group py-8 border-b border-[var(--color-border)] first:pt-0 last:border-b-0 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Year & Icon */}
                                <div className="flex items-center gap-4 md:w-32 shrink-0">
                                    <div className="w-10 h-10 flex items-center justify-center text-[var(--color-primary)]">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-bold text-[var(--color-primary)]">
                                        {pub.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                                        {pub.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-muted-foreground)] mb-1">
                                        {pub.authors}
                                    </p>
                                    <p className="text-xs text-[var(--color-muted-foreground)]/70">
                                        {pub.publisher}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    className="text-sm text-[var(--color-muted-foreground)] mt-12 pt-8 border-t border-[var(--color-border)]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    上記は主要な著作の一部です。このほか多数の論文・書籍を執筆しています。
                </motion.p>
            </div>
        </section>
    )
}
