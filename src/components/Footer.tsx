import { ExternalLink } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-dark py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo & Name */}
                    <div>
                        <p className="text-lg font-semibold text-white mb-1">
                            三宅・今井・池田法律事務所
                        </p>
                        <p className="text-xs text-white/50 tracking-widest uppercase">
                            Miyake, Imai & Ikeda Law Office
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <a
                            href="https://www.m-i-i-law.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                            公式サイト
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-10" />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40">
                        © {currentYear} 弁護士法人三宅・今井・池田法律事務所. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        東京都新宿区新宿1-8-5 新宿御苑室町ビル5階
                    </p>
                </div>
            </div>
        </footer>
    )
}
