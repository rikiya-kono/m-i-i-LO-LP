import {
  About,
  CaseStudies,
  Contact,
  Expertise,
  Footer,
  Header,
  Hero,
  MyNumber,
  News,
  Publications,
  Recruit,
  Team,
} from './components/sections'
import { CollapsibleSection } from './components/ui/modals'

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
        <div id="mynumber">
          <CollapsibleSection title="マイナンバーについて" titleEn="My Number">
            <MyNumber />
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
