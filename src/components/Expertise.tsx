import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { expertise } from '../data/content'
import { RefreshCw, Building2, Scale, Shield, ArrowRight } from 'lucide-react'

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
        <section ref={sectionRef} id="expertise" className="py-32 relative bg-[var(--color-secondary)]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header - AMT style centered */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Practice Areas</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        業務分野
                    </h2>
                    <div className="accent-line mt-6 mx-auto" />
                </motion.div>

                {/* Cards grid - Clean borderless style */}
                <div className="grid md:grid-cols-2 gap-8">
                    {expertise.map((area, index) => {
                        const Icon = icons[area.id] || RefreshCw
                        return (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                                className="group bg-white p-10 card-hover cursor-pointer"
                            >
                                {/* Icon and title row */}
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="w-12 h-12 flex items-center justify-center text-[var(--color-primary)] mb-4">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                                            {area.title}
                                        </h3>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>

                                {/* Items */}
                                <ul className="space-y-3">
                                    {area.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
