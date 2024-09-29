import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Project, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
        <div className="relative ze bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Project />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
