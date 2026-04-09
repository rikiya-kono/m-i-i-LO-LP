import { motion } from 'framer-motion'

export function About() {
    return (
        <section id="about" className="relative py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-20 items-center">

                    {/* Text Content */}
                    <div className="w-full md:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary text-xs tracking-[0.2em] uppercase font-sans mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-mincho font-bold leading-tight mb-8">
                                事務所紹介
                            </h2>

                            <div className="space-y-6 text-muted-foreground text-sm leading-loose font-sans">
                                <p>
                                    三宅・今井・池田法律事務所は、1972年の設立以来、多くの依頼者の皆様や企業の顧問弁護士として信頼をいただき、今日に至っております。
                                </p>
                                <p>
                                    当事務所は、一般企業法務・商事取引・訴訟等を広く取り扱っており、株主総会の指導・助言、各種契約書の作成・審査・交渉・相談はもとより、個人の方々からの法律相談にも応じております。
                                </p>
                                <p>
                                    また、会社更生・民事再生・破産等の企業倒産及び事業再生を主要な業務とし、多くの著名企業の破産管財人・申立代理人として関与するなど豊富な実績を有しており、倒産に関連した債権管理・回収業務や事業承継にも、この経験を生かした的確かつ実践的なアドバイスを行っています。
                                </p>
                                <p>
                                    当事務所は10名程度の弁護士を擁しており、急激な規模拡大を目指さず、弁護士間の緊密な連携のもと、依頼者の方々に最良のリーガルサービスを提供できるよう心がけています。
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual - Right Column */}
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
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 backdrop-blur-[2px]" />
                                <div className="w-full h-full bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301")' }}
                                />
                            </div>

                            {/* Floating Stat */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute -bottom-10 -left-10 md:left-10 bg-card p-8 shadow-2xl border border-white/5 max-w-xs z-20 backdrop-blur-md bg-card/90"
                            >
                                <div className="text-4xl font-serif text-primary mb-2">1972</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest">設立</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
