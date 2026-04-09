import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    title: string
    titleEn: string
    children: React.ReactNode
}

export function CollapsibleSection({ title, titleEn, children }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-white/5">

            {/* 折りたたみ時 — タイトルバー */}
            <AnimatePresence initial={false}>
                {!isOpen && (
                    <motion.div
                        key="header"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-8 md:py-10 cursor-pointer group"
                        onClick={() => setIsOpen(true)}
                    >
                        <div>
                            <p className="text-[9px] font-sans tracking-[0.4em] text-primary/70 uppercase mb-1">
                                {titleEn}
                            </p>
                            <h2 className="font-mincho font-bold text-lg md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                {title}
                            </h2>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 ml-6">
                            <span className="text-[10px] font-sans tracking-[0.35em] text-muted-foreground group-hover:text-primary transition-colors duration-300 uppercase hidden sm:block">
                                さらに表示
                            </span>
                            <div className="w-7 h-7 border border-white/20 group-hover:border-primary/60 flex items-center justify-center transition-colors duration-300">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1" className="text-muted-foreground group-hover:text-primary transition-colors" />
                                    <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1" className="text-muted-foreground group-hover:text-primary transition-colors" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 展開時 — フルセクション */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}

                        {/* 閉じるボタン */}
                        <div className="flex justify-center py-10 border-t border-white/5">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center gap-3 text-[10px] font-sans tracking-[0.35em] text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
                            >
                                <div className="w-7 h-7 border border-white/20 group-hover:border-primary/60 flex items-center justify-center transition-colors duration-300 rotate-45">
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1" />
                                        <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                                閉じる
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
