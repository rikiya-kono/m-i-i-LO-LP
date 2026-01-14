import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function About() {
    return (
        <section id="about" className="relative py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-20 items-center">

                    {/* Text Content - Magazine Style Left Column */}
                    <div className="w-full md:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary text-xs tracking-[0.2em] uppercase font-sans mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-mincho font-bold leading-tight mb-8">
                                危機を好機へ。<br />
                                <span className="text-muted-foreground text-2xl md:text-3xl mt-2 block font-normal">再生への確かな道筋を。</span>
                            </h2>

                            <div className="space-y-6 text-muted-foreground text-sm leading-loose font-sans">
                                <p>
                                    三宅・今井・池田法律事務所は、1972年の設立以来、半世紀以上にわたり倒産・事業再生のエキスパートとして、数多の企業の再起を支えてきました。
                                </p>
                                <p>
                                    私たちの強みは、単なる法的助言にとどまらない、経営の深層に踏み込んだ実践的なソリューションです。法的整理から私的整理まで、あらゆる手法を駆使し、最も適切な再生スキームを構築します。
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ x: 10 }}
                                className="mt-12 flex items-center gap-4 text-primary text-sm tracking-widest uppercase group"
                            >
                                <span>Read More about our History</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image/Visual - Offset Right Column */}
                    <div className="w-full md:w-7/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/3] md:aspect-[16/9]"
                        >
                            {/* Main Image Container */}
                            <div className="absolute inset-0 bg-secondary overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                {/* Abstract Geometric Overlay */}
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 backdrop-blur-[2px]" />
                                <div className="w-full h-full bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301")' }}
                                />
                            </div>

                            {/* Floating Card Element */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute -bottom-10 -left-10 md:left-10 bg-card p-8 shadow-2xl border border-white/5 max-w-xs z-20 backdrop-blur-md bg-card/90"
                            >
                                <div className="text-4xl font-serif text-primary mb-2">50+</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">Years of Excellence</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
