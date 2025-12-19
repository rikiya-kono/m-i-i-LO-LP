import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-accent)]/15 to-transparent rounded-full blur-3xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative lines */}
            <motion.div
                className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main heading */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-[var(--color-foreground)]">企業再生を、</span>
                        <br />
                        <span className="gradient-text">誠実に、迅速に</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-[var(--color-muted-foreground)] leading-relaxed max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        倒産・事業再生分野を専門とし、50年以上にわたり
                        <br className="hidden sm:block" />
                        数多くの企業の再建を支援してきました。
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Button
                            size="lg"
                            onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            業務分野を見る
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            事務所について
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-3 text-[var(--color-muted-foreground)]"
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
