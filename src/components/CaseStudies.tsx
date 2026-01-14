import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { caseStudies } from '../data/content'

export function CaseStudies() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="cases" className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Track Record</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        主要な実績
                    </h2>
                    <div className="accent-line mt-6" />
                </motion.div>

                {/* Timeline - Modern minimal style */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-[var(--color-border)]" />

                    <div className="space-y-0">
                        {caseStudies.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative flex gap-8 md:gap-16 py-8 border-b border-[var(--color-border)] last:border-b-0 group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + index * 0.08, duration: 0.6 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-24 w-3 h-3 rounded-full bg-white border-2 border-[var(--color-primary)] transform -translate-x-1/2 mt-2 group-hover:bg-[var(--color-primary)] transition-colors" />

                                {/* Year */}
                                <div className="w-16 md:w-24 shrink-0 pl-6 md:pl-0">
                                    <span className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pl-6 md:pl-8">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                                            {item.company}
                                        </h3>
                                        <span className="px-3 py-1 text-xs bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] font-medium">
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <motion.p
                    className="text-sm text-[var(--color-muted-foreground)] mt-16 pt-8 border-t border-[var(--color-border)]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    上記は主要な案件の一部です。このほか多数の倒産・事業再生案件に携わっています。
                </motion.p>
            </div>
        </section>
    )
}
