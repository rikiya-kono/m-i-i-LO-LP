import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { lawyers } from '../data/content'
import { User } from 'lucide-react'
import { LawyerModal } from './LawyerModal'

type Lawyer = typeof lawyers.partners[0]

const FILTERS: { label: string; key: string | null }[] = [
    { label: 'すべて', key: null },
    { label: '企業再編・M&A', key: '企業再編' },
    { label: '事業再生・倒産', key: '事業再生' },
    { label: '国際', key: '国際' },
    { label: '不動産', key: '不動産' },
    { label: '訴訟', key: '訴訟' },
    { label: 'コンプライアンス', key: 'コンプライアンス' },
]

function matchesFilter(lawyer: { specialties: string[] }, key: string | null) {
    if (!key) return true
    return lawyer.specialties.some(s => s.includes(key))
}

export function Team() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
    const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    const filteredPartners = lawyers.partners.filter(l => matchesFilter(l, activeFilter))
    const filteredAssociates = lawyers.associates.filter(l => matchesFilter(l, activeFilter))

    return (
        <>
            <section ref={sectionRef} id="team" className="py-32 relative bg-[var(--color-secondary)]">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Section header */}
                    <motion.div
                        className="mb-12 text-center"
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

                    {/* Specialty filter */}
                    <motion.div
                        className="mb-16 flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        {FILTERS.map((f) => (
                            <button
                                key={f.label}
                                onClick={() => setActiveFilter(f.key)}
                                className={`text-[10px] font-sans tracking-[0.25em] px-4 py-2 border transition-all duration-250 ${
                                    activeFilter === f.key
                                        ? 'border-primary text-primary bg-primary/10'
                                        : 'border-white/15 text-muted-foreground hover:border-white/35 hover:text-foreground/70'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
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
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center text-[var(--color-muted-foreground)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300">
                                                <User className="w-7 h-7" />
                                            </div>
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
                                            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-background flex items-center justify-center text-[var(--color-muted-foreground)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-300">
                                                <User className="w-6 h-6" />
                                            </div>
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
