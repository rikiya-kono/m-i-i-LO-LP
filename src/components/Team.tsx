import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { lawyers } from '../data/content'
import { User } from 'lucide-react'

export function Team() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="team" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">Team</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">弁護士紹介</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4 mx-auto" />
                </motion.div>

                {/* Partners */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-base font-medium text-[var(--color-muted-foreground)] mb-6 flex items-center gap-3">
                        <span className="w-10 h-px bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
                        パートナー
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {lawyers.partners.map((lawyer, index) => (
                            <motion.div
                                key={lawyer.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                <Card className="text-center py-6 group hover:bg-[var(--color-card)]/60 cursor-default">
                                    <CardContent className="p-0">
                                        {/* Avatar */}
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-primary)]/60 group-hover:from-[var(--color-primary)]/30 group-hover:to-[var(--color-accent)]/30 group-hover:scale-110 transition-all duration-300 border border-[var(--color-primary)]/10">
                                            <User className="w-7 h-7" />
                                        </div>
                                        <p className="font-medium text-sm text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{lawyer.name}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Associates */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className="text-base font-medium text-[var(--color-muted-foreground)] mb-6 flex items-center gap-3">
                        <span className="w-10 h-px bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
                        アソシエイト
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {lawyers.associates.map((lawyer, index) => (
                            <motion.div
                                key={lawyer.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.05 }}
                            >
                                <Card className="text-center py-5 group hover:bg-[var(--color-card)]/60 cursor-default">
                                    <CardContent className="p-0">
                                        {/* Avatar */}
                                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[var(--color-secondary)]/80 to-[var(--color-muted)]/50 flex items-center justify-center text-[var(--color-muted-foreground)]/60 group-hover:from-[var(--color-primary)]/20 group-hover:to-[var(--color-accent)]/20 group-hover:text-[var(--color-primary)]/60 group-hover:scale-110 transition-all duration-300">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <p className="font-medium text-sm text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{lawyer.name}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
