import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { CaseStudies } from './components/CaseStudies'
import { Team } from './components/Team'
import { Publications } from './components/Publications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <CaseStudies />
        <Team />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
