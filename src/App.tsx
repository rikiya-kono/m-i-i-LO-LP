import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CollapsibleSection } from './components/CollapsibleSection'
import { News } from './components/News'
import { Expertise } from './components/Expertise'
import { CaseStudies } from './components/CaseStudies'
import { Team } from './components/Team'
import { Publications } from './components/Publications'
import { Recruit } from './components/Recruit'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-foreground">
      <Header />
      <main>
        <Hero />
        <About />

        {/* 各セクションを個別に折りたたみ */}
        <div id="news">
          <CollapsibleSection title="最新情報" titleEn="Latest News">
            <News />
          </CollapsibleSection>
        </div>
        <div id="expertise">
          <CollapsibleSection title="業務分野" titleEn="Our Expertise">
            <Expertise />
          </CollapsibleSection>
        </div>
        <div id="cases">
          <CollapsibleSection title="主要な実績" titleEn="Track Record">
            <CaseStudies />
          </CollapsibleSection>
        </div>
        <div id="team">
          <CollapsibleSection title="弁護士紹介" titleEn="Our Lawyers">
            <Team />
          </CollapsibleSection>
        </div>
        <div id="publications">
          <CollapsibleSection title="著作関係" titleEn="Publications">
            <Publications />
          </CollapsibleSection>
        </div>
        <div id="recruit">
          <CollapsibleSection title="採用情報" titleEn="Recruitment">
            <Recruit />
          </CollapsibleSection>
        </div>
        <div id="contact">
          <CollapsibleSection title="アクセス" titleEn="Access">
            <Contact />
          </CollapsibleSection>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
