import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const expertiseItems = [
    { title: "事業再生", en: "Corporate Restructuring", desc: "法的整理（民事再生・会社更生）および私的整理（事業再生ADR等）を通じた抜本的な事業再建支援。" },
    { title: "倒産処理", en: "Insolvency Proceedings", desc: "破産、特別清算など、適切な清算手続の選択と実行、代理人業務。" },
    { title: "M&A・組織再編", en: "M&A / Reorganization", desc: "事業譲渡、会社分割、合併などを活用した、再生局面における戦略的M&Aの立案と実行。" },
    { title: "企業法務全般", en: "General Corporate", desc: "株主総会指導、コンプライアンス、契約書作成など、企業経営に関わる法務全般。" },
    { title: "訴訟・紛争解決", en: "Litigation & Dispute Resolution", desc: "企業間紛争、労働紛争など、高度な専門性が求められる訴訟案件への対応。" }
]

export function Expertise() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="expertise" className="py-32 bg-secondary text-secondary-foreground relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase font-sans mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-mincho font-bold">業務分野</h2>
                </div>

                <div className="flex flex-col">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative border-t border-white/10 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`py-12 flex flex-col md:flex-row md:items-baseline justify-between transition-all duration-500 ${hoveredIndex === index ? 'translate-x-4' : ''}`}>
                                <div className="flex items-baseline gap-6 md:w-1/3">
                                    <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                                    <h3 className={`text-2xl md:text-3xl font-mincho font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/3 mt-2 md:mt-0">
                                    <p className="text-accent text-xs uppercase tracking-widest font-sans">{item.en}</p>
                                </div>

                                <div className="md:w-1/3 mt-4 md:mt-0 pl-10 md:pl-0 flex items-center justify-between">
                                    <p className={`text-sm text-gray-400 text-justify transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`}>
                                        {item.desc}
                                    </p>
                                    <ArrowUpRight className={`w-5 h-5 ml-4 text-primary transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>

                            {/* Hover background line glow */}
                            <div className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-500 ease-out ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    )
}
