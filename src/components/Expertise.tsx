import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, User } from 'lucide-react'
import { useState } from 'react'
import { expertise, lawyers } from '../data/content'

const allLawyers = [...lawyers.partners, ...lawyers.associates]

// expertise ID → lawyer specialties の部分一致キーワード
const EXPERTISE_KEYWORDS: Record<string, string[]> = {
    counsel:           ['一般企業法務', '商事取引'],
    corporate:         ['企業再編', 'M&A', 'コンプライアンス', '一般企業法務'],
    realestate:        ['不動産'],
    restructuring:     ['事業再生', '倒産'],
    labor:             ['一般企業法務'],
    international:     ['国際'],
    litigation:        ['訴訟'],
    personal:          ['一般民事'],
    'court-appointed': ['事業再生', '倒産'],
}

function getMatchingLawyers(expertiseId: string) {
    const keys = EXPERTISE_KEYWORDS[expertiseId] ?? []
    return allLawyers.filter(l =>
        l.specialties.some(s => keys.some(k => s.includes(k)))
    )
}

export function Expertise() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [expandedId, setExpandedId] = useState<string | null>(null)

    return (
        <section id="expertise" className="py-32 bg-secondary text-secondary-foreground relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase font-sans mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-mincho font-bold">業務分野</h2>
                </div>

                <div className="flex flex-col">
                    {expertise.map((item, index) => {
                        const isExpanded = expandedId === item.id
                        const matchedLawyers = getMatchingLawyers(item.id)

                        return (
                            <div key={item.id}>
                                <motion.div
                                    className="relative border-t border-white/10 group cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.07 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                >
                                    <div className={`py-10 flex flex-col md:flex-row md:items-baseline justify-between transition-all duration-500 ${hoveredIndex === index ? 'translate-x-4' : ''}`}>
                                        <div className="flex items-baseline gap-6 md:w-1/3">
                                            <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                                            <h3 className={`text-xl md:text-2xl font-mincho font-medium transition-colors duration-300 ${hoveredIndex === index || isExpanded ? 'text-primary' : 'text-foreground'}`}>
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="md:w-1/3 mt-2 md:mt-0">
                                            <p className="text-accent text-xs uppercase tracking-widest font-sans">{item.en}</p>
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                {item.items.map((tag) => (
                                                    <span key={tag} className="text-xs text-foreground/65 border border-white/15 px-2 py-0.5 rounded-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="md:w-1/3 mt-4 md:mt-0 pl-10 md:pl-0 flex items-start justify-between gap-4">
                                            <p className="text-sm text-foreground/80 text-justify leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="shrink-0 mt-1"
                                            >
                                                <ChevronDown className={`w-5 h-5 text-primary transition-opacity duration-300 ${hoveredIndex === index || isExpanded ? 'opacity-100' : 'opacity-25'}`} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-500 ease-out ${hoveredIndex === index || isExpanded ? 'w-full' : 'w-0'}`} />
                                </motion.div>

                                {/* 担当弁護士 ぽぽぽっと展開 */}
                                <AnimatePresence initial={false}>
                                    {isExpanded && matchedLawyers.length > 0 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="py-6 px-6 md:pl-16 border-t border-primary/10 bg-primary/[0.03]">
                                                <p className="text-[9px] text-primary/70 uppercase tracking-[0.4em] mb-4 font-sans">担当弁護士</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {matchedLawyers.map((lawyer, i) => (
                                                        <motion.div
                                                            key={lawyer.id}
                                                            initial={{ opacity: 0, scale: 0.88, y: 6 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            transition={{ delay: i * 0.045, duration: 0.28, ease: 'easeOut' }}
                                                            className="flex items-center gap-2 bg-background/40 border border-white/10 px-3 py-2"
                                                        >
                                                            <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                                                                <User className="w-3 h-3 text-primary" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-foreground/90 font-medium leading-tight">{lawyer.name}</p>
                                                                <p className="text-[9px] text-muted-foreground leading-tight">{lawyer.role}</p>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    )
}
