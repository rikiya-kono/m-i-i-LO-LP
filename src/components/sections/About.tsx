import { motion } from 'framer-motion'

export function About() {
    return (
        <section id="about" className="relative py-28 md:py-40 bg-[#070707] overflow-hidden">

            {/* 背景装飾 — 大きな年号 */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold text-white/[0.025] pointer-events-none select-none leading-none"
                style={{ fontSize: 'clamp(120px, 22vw, 280px)' }}
                aria-hidden
            >
                1972
            </div>

            <div className="container mx-auto px-8 md:px-16 xl:px-24 relative z-10">

                {/* セクションラベル */}
                <motion.div
                    className="flex items-center gap-5 mb-16 md:mb-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="w-8 h-px bg-primary" />
                    <span className="text-[10px] font-sans tracking-[0.4em] text-primary uppercase">About Us</span>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12 md:gap-16">

                    {/* 見出し */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-mincho font-bold leading-tight text-foreground"
                                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                                事務所紹介
                            </h2>
                            <div className="mt-6 flex items-center gap-4">
                                <span className="text-5xl md:text-6xl font-serif font-bold text-primary/80 leading-none">
                                    50
                                    <span className="text-lg text-primary/50 ml-1">+</span>
                                </span>
                                <span className="text-xs text-muted-foreground leading-relaxed">
                                    年の<br />実績
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* 本文 */}
                    <div className="md:col-span-8">
                        <motion.div
                            className="space-y-7 text-sm text-foreground/80 leading-[2] font-sans"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
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
                        </motion.div>
                    </div>
                </div>

                {/* ボトム装飾ライン */}
                <motion.div
                    className="mt-20 h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.3) 0%, rgba(201,162,39,0.05) 100%)' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
        </section>
    )
}
