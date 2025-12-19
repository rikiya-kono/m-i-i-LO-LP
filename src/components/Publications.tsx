import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { publications } from '../data/content'
import { BookOpen } from 'lucide-react'

export function Publications() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} id="publications" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-secondary)]/20 to-[var(--color-background)]" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">Publications</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">著作関係</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </motion.div>

                {/* Publications grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1 }}
                        >
                            <Card className="group p-6 h-full hover:bg-[var(--color-card)]/60">
                                <CardContent className="p-0 flex gap-5">
                                    {/* Book icon */}
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/20 transition-all duration-300">
                                        <BookOpen className="w-6 h-6" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {/* Title */}
                                        <h3 className="font-semibold mb-2 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                                            {pub.title}
                                        </h3>

                                        {/* Authors */}
                                        <p className="text-sm text-[var(--color-muted-foreground)] mb-2">
                                            {pub.authors}
                                        </p>

                                        {/* Publisher and year */}
                                        <div className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]/70">
                                            <span>{pub.publisher}</span>
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-muted-foreground)]/50" />
                                            <span>{pub.year}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    className="text-sm text-[var(--color-muted-foreground)] mt-8"
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
