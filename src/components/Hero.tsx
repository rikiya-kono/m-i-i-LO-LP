import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Texture/Grain */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
            }} />

            {/* Asymmetric Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[60vh] h-[60vh] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[70vh] h-[70vh] rounded-full bg-muted/10 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 h-screen flex flex-col justify-center items-center">

                {/* Main Content - Centered & Elegant */}
                <div className="flex flex-col items-center justify-center space-y-12 text-center z-20">

                    {/* English Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <span className="text-accent text-xs tracking-[0.4em] uppercase font-sans text-center">Corporate Reorganization & Insolvency</span>
                        <div className="w-12 h-[1px] bg-primary/50" />
                    </motion.div>

                    {/* Main Title - Japanese Horizontal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-mincho font-bold tracking-widest text-foreground leading-tight drop-shadow-2xl">
                            <span className="inline-block">誠実<span className="text-primary">.</span></span>
                            <span className="inline-block md:ml-12 mt-4 md:mt-0">再生<span className="text-primary">.</span></span>
                        </h1>
                    </motion.div>

                    {/* Subtitle / English Name */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-xl md:text-3xl font-serif text-muted-foreground italic"
                    >
                        Miyake, Imai & Ikeda Law Office
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-muted-foreground/80 max-w-lg text-sm leading-relaxed font-sans"
                    >
                        We provide specialized legal services for corporate revitalization, based on integrity and over 50 years of experience.
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-8 md:left-1/2 md:-translate-x-1/2 flex items-center gap-4 text-xs tracking-widest text-muted-foreground/50 rotate-90 md:rotate-0 origin-left"
            >
                <span>SCROLL</span>
                <div className="w-12 h-[1px] bg-current" />
            </motion.div>
        </section>
    )
}
