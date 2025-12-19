import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, Menu, X } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(window.scrollY / scrollHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: '事務所について', href: '#about' },
        { label: '業務分野', href: '#expertise' },
        { label: '実績', href: '#cases' },
        { label: '弁護士', href: '#team' },
        { label: '著作', href: '#publications' },
        { label: 'アクセス', href: '#contact' },
    ]

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false)
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] z-[60]"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)]/30 py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
                    <motion.a
                        href="#"
                        className="flex items-center gap-3 group"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-0.5 shadow-lg shadow-[var(--color-primary)]/20 group-hover:shadow-xl group-hover:shadow-[var(--color-primary)]/30 transition-shadow">
                            <div className="w-full h-full rounded-[10px] bg-[var(--color-background)] flex items-center justify-center">
                                <Scale className="w-5 h-5 text-[var(--color-primary)]" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-semibold tracking-tight leading-none text-[var(--color-foreground)]">三宅・今井・池田法律事務所</span>
                            <span className="text-[10px] text-[var(--color-muted-foreground)] tracking-widest uppercase mt-0.5">Miyake, Imai & Ikeda</span>
                        </div>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="relative px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors rounded-lg hover:bg-[var(--color-secondary)]/50"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 + 0.3 }}
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="lg:hidden p-2.5 rounded-xl bg-[var(--color-secondary)]/50 text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="メニュー"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </motion.button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-background)]/95 backdrop-blur-xl border-b border-[var(--color-border)] overflow-hidden"
                        >
                            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1 max-w-7xl">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-left text-sm py-3 px-4 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/50 rounded-lg transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    )
}
