import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 hero-overlay z-10" />

            {/* Subtle animated background pattern */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-white/5 rounded-full"
                animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="container mx-auto px-6 relative z-20 max-w-7xl">
                <div className="max-w-4xl">
                    {/* English accent */}
                    <motion.p
                        className="text-accent-en text-white/70 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Miyake, Imai & Ikeda Law Office
                    </motion.p>

                    {/* Main heading */}
                    <motion.h1
                        className="text-display text-white mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        企業再生を、
                        <br />
                        <span className="text-white/90">誠実に、迅速に</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        倒産・事業再生分野を専門とし、50年以上にわたり
                        <br className="hidden sm:block" />
                        数多くの企業の再建を支援してきました。
                    </motion.p>

                    {/* CTA buttons - AMT style circular */}
                    <motion.div
                        className="flex flex-wrap items-center gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button
                            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center gap-4 text-white hover:text-white/80 transition-colors"
                        >
                            <span className="text-sm font-medium tracking-wide">当事務所について</span>
                            <span className="btn-circle text-white border-white/50 group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-primary)]">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>

                        <button
                            onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors"
                        >
                            <span className="text-sm font-medium tracking-wide">業務分野</span>
                            <span className="btn-circle text-white/50 border-white/30 group-hover:border-white/50">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-3 text-white/50"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    )
}
