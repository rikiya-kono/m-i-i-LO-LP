import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { news } from '../data/content'

const categoryColors: Record<string, string> = {
    '著作': 'text-amber-400 bg-amber-400/10',
    '論文': 'text-blue-400 bg-blue-400/10',
    'セミナー': 'text-emerald-400 bg-emerald-400/10',
}

export function News() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} id="news" className="py-32 relative bg-[var(--color-secondary)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Latest News</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        最新情報
                    </h2>
                    <div className="accent-line mt-6" />
                </motion.div>

                <div className="space-y-0">
                    {news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                            className="group py-6 border-b border-[var(--color-border)] last:border-b-0 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
                        >
                            <div className="flex items-center gap-3 shrink-0 sm:w-48">
                                <span className="text-sm text-[var(--color-muted-foreground)] whitespace-nowrap">
                                    {item.date}
                                </span>
                            </div>
                            <div className="flex items-start gap-3 flex-1">
                                <span className={`shrink-0 text-xs px-2 py-0.5 font-medium rounded-sm ${categoryColors[item.category] ?? 'text-gray-400 bg-gray-400/10'}`}>
                                    {item.category}
                                </span>
                                <p className="text-sm text-[var(--color-foreground)] leading-relaxed group-hover:text-[var(--color-primary)] transition-colors">
                                    {item.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
