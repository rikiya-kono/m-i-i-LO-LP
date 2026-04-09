import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { News } from './components/News'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { CaseStudies } from './components/CaseStudies'
import { Team } from './components/Team'
import { Publications } from './components/Publications'
import { Recruit } from './components/Recruit'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <News />
        <About />
        <Expertise />
        <CaseStudies />
        <Team />
        <Publications />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
