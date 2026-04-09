import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { expertise } from '../data/content'

export function Expertise() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="expertise" className="py-32 bg-secondary text-secondary-foreground relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <span className="text-accent text-xs tracking-[0.2em] uppercase font-sans mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-mincho font-bold">業務分野</h2>
                </div>

                <div className="flex flex-col">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative border-t border-white/10 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`py-10 flex flex-col md:flex-row md:items-baseline justify-between transition-all duration-500 ${hoveredIndex === index ? 'translate-x-4' : ''}`}>
                                <div className="flex items-baseline gap-6 md:w-1/3">
                                    <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                                    <h3 className={`text-xl md:text-2xl font-mincho font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/3 mt-2 md:mt-0">
                                    <p className="text-accent text-xs uppercase tracking-widest font-sans">{item.en}</p>
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {item.items.map((tag) => (
                                            <span key={tag} className="text-xs text-muted-foreground/60 border border-white/10 px-2 py-0.5 rounded-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:w-1/3 mt-4 md:mt-0 pl-10 md:pl-0 flex items-center justify-between">
                                    <p className={`text-sm text-gray-400 text-justify transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`}>
                                        {item.desc}
                                    </p>
                                    <ArrowUpRight className={`w-5 h-5 ml-4 text-primary shrink-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>

                            <div className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-500 ease-out ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    )
}
