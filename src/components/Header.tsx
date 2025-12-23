import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
                {/* Logo - Text based, AMT style */}
                <motion.a
                    href="#"
                    className="group"
                    onClick={(e) => {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex flex-col">
                        <span className={`text-base font-semibold tracking-tight leading-none transition-colors ${isScrolled ? 'text-[var(--color-foreground)]' : 'text-white'
                            }`}>
                            三宅・今井・池田法律事務所
                        </span>
                        <span className={`text-[10px] tracking-widest uppercase mt-1 transition-colors ${isScrolled ? 'text-[var(--color-muted-foreground)]' : 'text-white/60'
                            }`}>
                            Miyake, Imai & Ikeda
                        </span>
                    </div>
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`relative text-sm transition-colors ${isScrolled
                                    ? 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
                                    : 'text-white/70 hover:text-white'
                                }`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[var(--color-primary)]' : 'bg-white'
                                }`} />
                        </motion.button>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <motion.button
                    className={`lg:hidden p-2.5 rounded-lg transition-colors ${isScrolled
                            ? 'text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]'
                            : 'text-white hover:bg-white/10'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    aria-label="メニュー"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border)] overflow-hidden"
                    >
                        <nav className="container mx-auto px-6 py-6 flex flex-col gap-1 max-w-7xl">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-left text-sm py-3 px-4 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] rounded-lg transition-colors"
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
    )
}
