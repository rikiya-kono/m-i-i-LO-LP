import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { lawyers } from '../data/content'
import { User } from 'lucide-react'

export function Team() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="team" className="py-32 relative bg-[var(--color-secondary)]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header - AMT style */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Our Lawyers</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        弁護士紹介
                    </h2>
                    <div className="accent-line mt-6 mx-auto" />
                </motion.div>

                {/* Partners */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3 className="text-sm font-medium text-[var(--color-muted-foreground)] mb-8 flex items-center gap-4">
                        <span className="w-12 h-px bg-[var(--color-primary)]" />
                        パートナー
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {lawyers.partners.map((lawyer, index) => (
                            <motion.div
                                key={lawyer.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                                className="group text-center"
                            >
                                <div className="bg-card border border-white/5 p-6 card-hover hover:border-primary/30 transition-colors">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center text-[var(--color-muted-foreground)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300">
                                        <User className="w-7 h-7" />
                                    </div>
                                    <p className="font-medium text-sm text-[var(--color-foreground)]">
                                        {lawyer.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Associates */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <h3 className="text-sm font-medium text-[var(--color-muted-foreground)] mb-8 flex items-center gap-4">
                        <span className="w-12 h-px bg-[var(--color-primary)]" />
                        アソシエイト
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {lawyers.associates.map((lawyer, index) => (
                            <motion.div
                                key={lawyer.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                                className="group text-center"
                            >
                                <div className="bg-card border border-white/5 p-5 card-hover hover:border-primary/30 transition-colors">
                                    {/* Avatar */}
                                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-background flex items-center justify-center text-[var(--color-muted-foreground)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-300">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <p className="font-medium text-sm text-[var(--color-foreground)]">
                                        {lawyer.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
