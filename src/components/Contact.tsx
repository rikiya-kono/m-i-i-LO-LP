import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import { MapPin, Phone, Printer, Train } from 'lucide-react'

export function Contact() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const officeInfo = {
        name: '弁護士法人三宅・今井・池田法律事務所',
        nameEn: 'Miyake, Imai & Ikeda Law Office',
        address: '〒160-0022 東京都新宿区新宿1-8-5 新宿御苑室町ビル5階',
        tel: '03-3356-5251',
        fax: '03-3356-5261',
        access: [
            '東京メトロ丸ノ内線「新宿御苑前」駅 2番出口より徒歩1分',
            '都営新宿線「新宿三丁目」駅 C5出口より徒歩5分',
        ],
    }

    const contactItems = [
        { icon: MapPin, label: '住所', value: officeInfo.address },
        { icon: Phone, label: '電話', value: officeInfo.tel },
        { icon: Printer, label: 'FAX', value: officeInfo.fax },
    ]

    return (
        <section ref={sectionRef} id="contact" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase">Access</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-foreground)]">アクセス</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-border)]/50 bg-[var(--color-card)]/30 shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.7101!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjEiTiAxMznCsDQyJzM2LjQiRQ!5e0!3m2!1sja!2sjp!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="オフィス所在地"
                                className="grayscale-[0.7] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Office info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="p-8 h-full bg-[var(--color-card)]/40">
                            <CardContent className="p-0">
                                <h3 className="text-xl font-semibold mb-1 text-[var(--color-foreground)]">{officeInfo.name}</h3>
                                <p className="text-xs text-[var(--color-muted-foreground)] tracking-widest uppercase mb-8">{officeInfo.nameEn}</p>

                                <div className="space-y-6">
                                    {contactItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            className="flex gap-4"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--color-muted-foreground)] mb-1">{item.label}</p>
                                                <p className="text-sm text-[var(--color-foreground)]">{item.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Access */}
                                    <motion.div
                                        className="flex gap-4"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                            <Train className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[var(--color-muted-foreground)] mb-1">交通</p>
                                            <ul className="space-y-1">
                                                {officeInfo.access.map((item, index) => (
                                                    <li key={index} className="text-sm text-[var(--color-muted-foreground)]">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
