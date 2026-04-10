import { motion, AnimatePresence } from 'framer-motion'
import { X, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Lawyer } from '../../../types/lawyer'

type Props = {
    lawyer: Lawyer | null
    onClose: () => void
}

export function LawyerModal({ lawyer, onClose }: Props) {
    const [isDesktop, setIsDesktop] = useState(false)

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

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        const updateLayout = (event: MediaQueryList | MediaQueryListEvent) => {
            setIsDesktop(event.matches)
        }

        updateLayout(mediaQuery)
        mediaQuery.addEventListener('change', updateLayout)
        return () => mediaQuery.removeEventListener('change', updateLayout)
    }, [])

    if (typeof document === 'undefined') return null

    return createPortal(
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
                        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 md:items-stretch md:justify-end md:p-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="pointer-events-auto relative h-full max-h-[80vh] w-full max-w-2xl overflow-y-auto border border-white/10 bg-[var(--color-secondary)] md:max-h-none md:border-y-0 md:border-r-0 md:border-l"
                            initial={isDesktop ? { x: '100%' } : { scale: 0.96, y: 16, opacity: 0 }}
                            animate={isDesktop ? { x: 0 } : { scale: 1, y: 0, opacity: 1 }}
                            exit={isDesktop ? { x: '100%' } : { scale: 0.96, y: 8, opacity: 0 }}
                            transition={
                                isDesktop
                                    ? { type: 'tween', duration: 0.4, ease: 'easeInOut' }
                                    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                            }
                        >
                        <div className="p-8 md:p-16">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/10 text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground md:right-8 md:top-8"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="flex items-start gap-6 mb-12">
                                {lawyer.photoUrl ? (
                                    <img
                                        src={lawyer.photoUrl}
                                        alt={lawyer.name}
                                        className="w-20 h-20 shrink-0 rounded-full object-cover border border-white/10 bg-background"
                                    />
                                ) : (
                                    <div className="w-20 h-20 shrink-0 rounded-full bg-background flex items-center justify-center text-muted-foreground border border-white/10">
                                        <User className="w-9 h-9" />
                                    </div>
                                )}
                                <div>
                                    <span className="text-xs text-[var(--color-primary)] tracking-widest uppercase mb-1 block">{lawyer.role}</span>
                                    <h2 className="text-3xl font-mincho font-bold text-foreground mb-1">{lawyer.name}</h2>
                                    <p className="text-sm text-foreground/60 italic">{lawyer.nameEn}</p>
                                    <p className="text-xs text-foreground/55 mt-2">{lawyer.bar}</p>
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
                                        <span key={s} className="text-xs px-3 py-1.5 border border-white/10 text-foreground/75 bg-background/30">
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
                                        <li key={i} className="text-sm text-foreground/80 flex gap-3">
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
                                        <li key={i} className="text-sm text-foreground/80 flex gap-3">
                                            <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {lawyer.majorAchievements && lawyer.majorAchievements.length > 0 && (
                                <div className="mb-10">
                                    <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                        <span className="w-6 h-px bg-[var(--color-primary)]" />
                                        主要実績
                                    </h3>
                                    <ul className="space-y-3">
                                        {lawyer.majorAchievements.map((item, i) => (
                                            <li key={i} className="text-sm text-foreground/80 flex gap-3 leading-relaxed">
                                                <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Languages */}
                            <div>
                                <h3 className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="w-6 h-px bg-[var(--color-primary)]" />
                                    使用言語
                                </h3>
                                <p className="text-sm text-foreground/80">{lawyer.languages.join('・')}</p>
                            </div>
                        </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        ,
        document.body
    )
}
