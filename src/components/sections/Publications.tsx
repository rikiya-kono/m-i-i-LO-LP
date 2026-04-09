import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { publications } from '../../data'
import { BookOpen, ChevronDown } from 'lucide-react'

export function Publications() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
    const [showAll, setShowAll] = useState(false)

    const displayed = showAll ? publications : publications.slice(0, 10)

    return (
        <section ref={sectionRef} id="publications" className="pt-8 pb-24 relative bg-background">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Publications list */}
                <div className="space-y-0">
                    {displayed.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.05 + index * 0.04, duration: 0.5 }}
                            className="group py-6 border-b border-[var(--color-border)] first:pt-0 last:border-b-0"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                                {/* Year & Icon */}
                                <div className="flex items-center gap-4 md:w-32 shrink-0">
                                    <div className="w-10 h-10 flex items-center justify-center text-[var(--color-primary)]">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <span className="text-base font-bold text-[var(--color-primary)]">
                                        {pub.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                                        {pub.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-muted-foreground)] mb-0.5">
                                        {pub.authors}
                                    </p>
                                    <p className="text-xs text-[var(--color-muted-foreground)]/60">
                                        {pub.publisher}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show more / less button */}
                {publications.length > 10 && (
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-3 border border-[var(--color-border)] text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:border-[var(--color-primary)] transition-colors"
                        >
                            {showAll ? '一部のみ表示' : `全${publications.length}冊を表示`}
                            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
                        </button>
                    </motion.div>
                )}

                {/* Note */}
                <motion.p
                    className="text-sm text-[var(--color-muted-foreground)] mt-12 pt-8 border-t border-[var(--color-border)]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    上記のほか、多数の論文・書籍を執筆しています。
                </motion.p>
            </div>
        </section>
    )
}
