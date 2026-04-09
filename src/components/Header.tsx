import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // メニュー開閉時のbodyスクロール制御
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    const navItems = [
        { name: '事務所紹介', href: '#about' },
        { name: '業務分野', href: '#expertise' },
        { name: '弁護士紹介', href: '#team' },
        { name: '著作関係', href: '#publications' },
        { name: '採用情報', href: '#recruit' },
        { name: 'アクセス', href: '#contact' },
    ]

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false)
        // スクロールをリセットしてから遷移
        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-[#070707]/90 backdrop-blur-md border-b border-white/5' : 'py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="relative z-50 group" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-mincho text-base md:text-lg tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                        三宅・今井・池田法律事務所
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isMenuOpen
                            ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-5 h-5" /></motion.span>
                            : <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-5 h-5" /></motion.span>
                        }
                    </AnimatePresence>
                </button>

                {/* Mobile overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-[#070707] z-40 lg:hidden overflow-y-auto"
                        >
                            <div className="min-h-full flex flex-col items-center justify-center py-24 px-8 gap-0">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: i * 0.06, duration: 0.4 }}
                                        className="w-full max-w-xs"
                                    >
                                        <a
                                            href={item.href}
                                            onClick={() => handleNavClick(item.href)}
                                            className="block py-5 text-center border-b border-white/5 last:border-0"
                                        >
                                            <span className="font-mincho text-2xl text-foreground hover:text-primary transition-colors">
                                                {item.name}
                                            </span>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
