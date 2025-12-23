import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
        <section ref={sectionRef} id="contact" className="py-32 relative bg-[var(--color-secondary)]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header - AMT style centered */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-en mb-4 block">Access</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
                        アクセス
                    </h2>
                    <div className="accent-line mt-6 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-white shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.7101!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjEiTiAxMznCsDQyJzM2LjQiRQ!5e0!3m2!1sja!2sjp!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="オフィス所在地"
                                className="grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Office info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="bg-white p-10 h-full">
                            <h3 className="text-xl font-semibold mb-1 text-[var(--color-foreground)]">
                                {officeInfo.name}
                            </h3>
                            <p className="text-xs text-[var(--color-muted-foreground)] tracking-widest uppercase mb-10">
                                {officeInfo.nameEn}
                            </p>

                            <div className="space-y-8">
                                {contactItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        className="flex gap-5"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[var(--color-primary)]">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[var(--color-muted-foreground)] mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-sm text-[var(--color-foreground)]">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Access */}
                                <motion.div
                                    className="flex gap-5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[var(--color-primary)]">
                                        <Train className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[var(--color-muted-foreground)] mb-1">
                                            交通
                                        </p>
                                        <ul className="space-y-1">
                                            {officeInfo.access.map((item, index) => (
                                                <li key={index} className="text-sm text-[var(--color-muted-foreground)]">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
