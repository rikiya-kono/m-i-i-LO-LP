export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-20 text-muted-foreground">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                    <div>
                        <h2 className="text-2xl font-serif text-foreground mb-6">Miyake, Imai & Ikeda</h2>
                        <address className="not-italic text-sm leading-relaxed space-y-2">
                            <p>〒100-0005</p>
                            <p>Tokyo, Chiyoda-ku, Marunouchi 1-1-1</p>
                            <p>Palace Building 5F</p>
                        </address>
                    </div>

                    <div className="text-right">
                        <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-xs tracking-widest uppercase mb-8">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
                        </ul>
                        <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Miyake, Imai & Ikeda Law Office. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
