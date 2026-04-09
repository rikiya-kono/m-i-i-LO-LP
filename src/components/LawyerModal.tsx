import { motion, AnimatePresence } from 'framer-motion'
import { X, User } from 'lucide-react'
import { useEffect } from 'react'

type Lawyer = {
    id: string
    name: string
    nameEn: string
    role: string
    education: string[]
    career: string[]
    specialties: string[]
    bar: string
    languages: string[]
}

type Props = {
    lawyer: Lawyer | null
    onClose: () => void
}

export function LawyerModal({ lawyer, onClose }: Props) {
    useEffect(() => {
        if (lawyer) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [lawyer])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    return (
        <AnimatePresence>
            {lawyer && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[var(--color-secondary)] border-l border-white/10 z-50 overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div className="p-10 md:p-16">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-white/10 hover:border-white/30"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="flex items-start gap-6 mb-12">
                                <div className="w-20 h-20 shrink-0 rounded-full bg-background flex items-center justify-center text-muted-foreground border border-white/10">
                                    <User className="w-9 h-9" />
                                </div>
                                <div>
                                    <span className="text-xs text-[var(--color-primary)] tracking-widest uppercase mb-1 block">{lawyer.role}</span>
                                    <h2 className="text-3xl font-mincho font-bold text-foreground mb-1">{lawyer.name}</h2>
                                    <p className="text-sm text-muted-foreground italic">{lawyer.nameEn}</p>
                                    <p className="text-xs text-muted-foreground mt-2">{lawyer.bar}</p>
                                </div>
                            </div>

                            {/* Specialties */}
                            <div className="mb-10">
                                <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[var(--color-primary)]" />
                                    取扱分野
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {lawyer.specialties.map((s) => (
                                        <span key={s} className="text-xs px-3 py-1.5 border border-white/10 text-muted-foreground bg-background/30">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="mb-10">
                                <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[var(--color-primary)]" />
                                    学歴
                                </h3>
                                <ul className="space-y-2">
                                    {lawyer.education.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex gap-3">
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Career */}
                            <div className="mb-10">
                                <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[var(--color-primary)]" />
                                    職歴・役職
                                </h3>
                                <ul className="space-y-2">
                                    {lawyer.career.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex gap-3">
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Languages */}
                            <div>
                                <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[var(--color-primary)]" />
                                    使用言語
                                </h3>
                                <p className="text-sm text-muted-foreground">{lawyer.languages.join('・')}</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
