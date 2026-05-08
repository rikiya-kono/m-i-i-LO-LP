import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { lawyers } from '../../data'
import { User } from 'lucide-react'
import { LawyerModal } from '../ui/modals'
import type { Lawyer } from '../../types/lawyer'

export function matchesFilter(lawyer: { specialties: string[] }, key: string | null) {
    if (!key) return true
    return lawyer.specialties.some(s => s.includes(key))
}

export function filterLawyersBySpecialty<T extends { specialties: string[] }>(items: T[], key: string | null) {
    return items.filter(lawyer => matchesFilter(lawyer, key))
}

function LawyerAvatar({ lawyer, large = false }: { lawyer: Lawyer; large?: boolean }) {
    const sizeClass = large ? 'w-16 h-16' : 'w-14 h-14'
    const iconClass = large ? 'w-7 h-7' : 'w-6 h-6'
    const accentClass = large ? 'group-hover:bg-[var(--color-primary)]' : 'group-hover:bg-[var(--color-accent)]'

    if (lawyer.photoUrl) {
        return (
            <img
                src={lawyer.photoUrl}
                alt={lawyer.name}
                className={`${sizeClass} mx-auto mb-4 rounded-full object-cover border border-white/10 bg-background`}
            />
        )
    }

    return (
        <div className={`${sizeClass} mx-auto mb-4 rounded-full bg-background flex items-center justify-center text-[var(--color-muted-foreground)] ${accentClass} group-hover:text-black transition-all duration-300`}>
            <User className={iconClass} />
        </div>
    )
}

export function Team() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
    const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null)

    const filteredPartners = filterLawyersBySpecialty(lawyers.partners, null)
    const filteredAssociates = filterLawyersBySpecialty(lawyers.associates, null)

    return (
        <>
            <section ref={sectionRef} id="team" className="pt-8 pb-24 relative bg-[var(--color-secondary)]">
                <div className="container mx-auto px-6 max-w-7xl">
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
                        <AnimatePresence mode="popLayout">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                                {filteredPartners.map((lawyer) => (
                                    <motion.div
                                        key={lawyer.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.85 }}
                                        transition={{ duration: 0.25 }}
                                        className="group text-center cursor-pointer"
                                        onClick={() => setSelectedLawyer(lawyer)}
                                    >
                                        <div className="bg-card border border-white/5 p-6 card-hover hover:border-primary/30 transition-colors">
                                            <LawyerAvatar lawyer={lawyer} large />
                                            <p className="font-medium text-sm text-[var(--color-foreground)]">
                                                {lawyer.name}
                                            </p>
                                            <p className="text-xs text-[var(--color-muted-foreground)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                詳細を見る
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                                {filteredPartners.length === 0 && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full text-sm text-muted-foreground py-4"
                                    >
                                        該当する弁護士はいません
                                    </motion.p>
                                )}
                            </div>
                        </AnimatePresence>
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
                        <AnimatePresence mode="popLayout">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {filteredAssociates.map((lawyer) => (
                                    <motion.div
                                        key={lawyer.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.85 }}
                                        transition={{ duration: 0.25 }}
                                        className="group text-center cursor-pointer"
                                        onClick={() => setSelectedLawyer(lawyer)}
                                    >
                                        <div className="bg-card border border-white/5 p-5 card-hover hover:border-primary/30 transition-colors">
                                            <LawyerAvatar lawyer={lawyer} />
                                            <p className="font-medium text-sm text-[var(--color-foreground)]">
                                                {lawyer.name}
                                            </p>
                                            <p className="text-xs text-[var(--color-muted-foreground)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                詳細を見る
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                                {filteredAssociates.length === 0 && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full text-sm text-muted-foreground py-4"
                                    >
                                        該当する弁護士はいません
                                    </motion.p>
                                )}
                            </div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <LawyerModal lawyer={selectedLawyer} onClose={() => setSelectedLawyer(null)} />
        </>
    )
}
