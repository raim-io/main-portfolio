import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, StarsCanvas, Tech, Works } from "./components"
import { DisplayProvider } from "./components/DisplayContext"

const App = () => {

  return (
    <BrowserRouter>
      <DisplayProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div>
            <About />
            {/* <Experience /> */}
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </DisplayProvider>
    </BrowserRouter>
  )
}

export default App
