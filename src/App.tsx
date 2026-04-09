import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { AccordionReveal } from './components/AccordionReveal'
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
        <AccordionReveal>
          <News />
          <Expertise />
          <CaseStudies />
          <Team />
          <Publications />
          <Recruit />
          <Contact />
        </AccordionReveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
