import { Scale, ExternalLink } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-[var(--color-border)]/30 bg-[var(--color-card)]/20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-0.5 shadow-lg shadow-[var(--color-primary)]/10">
                            <div className="w-full h-full rounded-[6px] bg-[var(--color-background)] flex items-center justify-center">
                                <Scale className="w-4 h-4 text-[var(--color-primary)]" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--color-foreground)]">三宅・今井・池田法律事務所</p>
                            <p className="text-[9px] text-[var(--color-muted-foreground)] tracking-widest uppercase">Miyake, Imai & Ikeda</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-[var(--color-muted-foreground)] text-center">
                        © {currentYear} 弁護士法人三宅・今井・池田法律事務所. All rights reserved.
                    </p>

                    {/* Links */}
                    <a
                        href="https://www.m-i-i-law.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
                    >
                        公式サイト
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
