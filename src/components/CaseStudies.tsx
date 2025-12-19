import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { caseStudies } from '../data/content'

export function CaseStudies() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="cases" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-secondary)]/20 to-[var(--color-background)]" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">Track Record</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">主要な実績</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-primary)]/20 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {caseStudies.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] border-4 border-[var(--color-background)] transform -translate-x-1/2 md:-translate-x-1/2 mt-8 shadow-lg shadow-[var(--color-primary)]/30"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                />

                                {/* Content card */}
                                <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <motion.div
                                        className={`p-6 rounded-2xl border border-[var(--color-border)]/50 bg-[var(--color-card)]/30 backdrop-blur-sm hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-card)]/50 transition-all duration-300 group ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md`}
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* Year badge */}
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">{item.year}</span>
                                            <span className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 font-medium">
                                                {item.type}
                                            </span>
                                        </div>

                                        {/* Company name */}
                                        <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                                            {item.company}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <motion.p
                    className="text-center text-sm text-[var(--color-muted-foreground)] mt-16"
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
