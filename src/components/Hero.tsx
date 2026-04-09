import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Hero() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#070707]">

            {/* 背景 — 極細グリッド線 */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
            }} />

            {/* 右端装飾ライン */}
            <motion.div
                className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                initial={{ scaleY: 0 }}
                animate={mounted ? { scaleY: 1 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* 左端竪書きラベル */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
                <motion.div
                    className="writing-vertical text-[10px] text-white/15 tracking-[0.35em] font-sans"
                    initial={{ opacity: 0 }}
                    animate={mounted ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 1.8 }}
                >
                    MIYAKE · IMAI · IKEDA
                </motion.div>
                <motion.div
                    className="w-px flex-1 bg-white/10"
                    style={{ height: 80 }}
                    initial={{ scaleY: 0 }}
                    animate={mounted ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, delay: 2 }}
                />
            </div>

            {/* メインコンテンツ */}
            <div className="container mx-auto px-8 md:px-16 xl:px-24 pt-24">
                <div className="max-w-5xl">

                    {/* 創立年 */}
                    <motion.p
                        className="text-[10px] md:text-xs font-sans tracking-[0.5em] text-primary/60 uppercase mb-10 md:mb-14"
                        initial={{ opacity: 0, x: -20 }}
                        animate={mounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Est.&ensp;1972
                    </motion.p>

                    {/* 事務所名 — 主タイトル */}
                    <div className="overflow-hidden mb-4 md:mb-6">
                        <motion.h1
                            className="font-mincho font-bold text-foreground leading-none tracking-tight whitespace-nowrap"
                            style={{ fontSize: 'clamp(1.75rem, 9.2vw, 8rem)' }}
                            initial={{ y: '110%' }}
                            animate={mounted ? { y: 0 } : {}}
                            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            三宅・今井・池田
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-12 md:mb-16">
                        <motion.h2
                            className="font-mincho font-normal text-white/70 leading-none tracking-[0.2em]"
                            style={{ fontSize: 'clamp(1rem, 4.5vw, 3.8rem)' }}
                            initial={{ y: '110%' }}
                            animate={mounted ? { y: 0 } : {}}
                            transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            法律事務所
                        </motion.h2>
                    </div>

                    {/* 区切りライン + 英語名 */}
                    <motion.div
                        className="flex items-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={mounted ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <motion.div
                            className="h-px bg-primary/40"
                            initial={{ width: 0 }}
                            animate={mounted ? { width: 56 } : {}}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        />
                        <p className="text-[10px] md:text-xs font-sans tracking-[0.35em] text-white/35 uppercase">
                            Miyake,&ensp;Imai&ensp;&amp;&ensp;Ikeda&ensp;Law&ensp;Office
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ボトム横ライン */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.15) 50%, transparent 100%)' }}
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.6 }}
            />

            {/* スクロール誘導 — 右下 */}
            <motion.div
                className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 2.2 }}
            >
                <span className="writing-vertical text-[9px] font-sans tracking-[0.4em] text-white/20 uppercase">Scroll</span>
                <motion.div
                    className="w-px bg-white/20"
                    animate={{ height: [20, 48, 20] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </section>
    )
}
