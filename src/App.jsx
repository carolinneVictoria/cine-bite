import './App.css'
import AboutSection from './components/AboutSection'
import Background from './components/Background'
import Header from './components/Header'
import MainSection from './components/MainSection'

function App() {

  return (
        <section className="bg-(--bg) w-full min-h-screen">
          <Background>
            <div className="relative z-10">
              <Header />
              <MainSection />
              <AboutSection />
            </div>
          </Background>
        </section>
  )    
}

export default App
