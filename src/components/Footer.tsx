export function Footer() {
    const navLinks = [
        { label: '事務所紹介', href: '#about' },
        { label: '業務分野', href: '#expertise' },
        { label: '弁護士紹介', href: '#team' },
        { label: '著作関係', href: '#publications' },
        { label: '採用情報', href: '#recruit' },
        { label: 'アクセス', href: '#contact' },
    ]

    return (
        <footer className="bg-background border-t border-white/5 py-20 text-muted-foreground">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                    <div>
                        <h2 className="text-2xl font-serif text-foreground mb-2">三宅・今井・池田法律事務所</h2>
                        <p className="text-xs text-muted-foreground/60 mb-6">Miyake, Imai & Ikeda Law Office</p>
                        <address className="not-italic text-sm leading-relaxed space-y-1">
                            <p>〒160-0022 東京都新宿区新宿1丁目8番5号</p>
                            <p>新宿御苑室町ビル5階</p>
                            <p className="mt-2">東京メトロ丸ノ内線「新宿御苑前」駅 2番出口より徒歩1分</p>
                        </address>
                    </div>

                    <div className="text-right">
                        <ul className="flex flex-wrap justify-end gap-4 md:gap-8 text-xs tracking-wider mb-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-wrap justify-end gap-4 md:gap-8 text-xs tracking-widest uppercase mb-6">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                        </ul>
                        <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} miyake/imai/ike law office All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
