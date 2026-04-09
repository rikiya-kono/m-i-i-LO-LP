import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

export function AccordionReveal({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        if (!contentRef.current) return
        const ro = new ResizeObserver(() => {
            if (contentRef.current) setContentHeight(contentRef.current.scrollHeight)
        })
        ro.observe(contentRef.current)
        return () => ro.disconnect()
    }, [])

    return (
        <div>
            {/* トリガー帯 */}
            <div className="relative py-20 flex flex-col items-center gap-0 bg-[#070707]">
                {/* 上ライン */}
                <div className="w-px h-14 bg-gradient-to-b from-transparent to-primary/30 mb-8" />

                <button
                    onClick={() => setIsOpen(v => !v)}
                    className="group flex flex-col items-center gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                >
                    <motion.div
                        className="w-9 h-9 border border-primary/40 flex items-center justify-center text-primary/70 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.2" />
                            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                    </motion.div>
                    <span className="text-[10px] font-sans tracking-[0.45em] text-muted-foreground group-hover:text-primary transition-colors duration-300 uppercase">
                        {isOpen ? '閉じる' : 'さらに表示'}
                    </span>
                </button>

                {/* 下ライン */}
                <div className="w-px h-14 bg-gradient-to-b from-primary/30 to-transparent mt-8" />
            </div>

            {/* 折りたたみコンテンツ */}
            <motion.div
                animate={{ height: isOpen ? contentHeight || 'auto' : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
            >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={contentRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
