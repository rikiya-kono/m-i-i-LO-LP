import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { expertise } from '../data/content'
import { RefreshCw, Building2, Scale, Shield } from 'lucide-react'

export function Expertise() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
        restructuring: RefreshCw,
        corporate: Building2,
        litigation: Scale,
        'court-appointed': Shield,
    }

    return (
        <section ref={sectionRef} id="expertise" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">業務分野</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4 mx-auto" />
                </motion.div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {expertise.map((area, index) => {
                        const Icon = icons[area.id] || RefreshCw
                        return (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                            >
                                <Card className="group h-full p-8 hover:bg-[var(--color-card)]/60">
                                    <CardContent className="p-0">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/20 transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold mb-4 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                                            {area.title}
                                        </h3>

                                        {/* Items */}
                                        <ul className="space-y-3">
                                            {area.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
