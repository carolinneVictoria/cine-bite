import './App.css'
import AboutSection from './components/AboutSection'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import MainSection from './components/MainSection'
import RecipeSection from './components/RecipeSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {

  return (
        <section className="bg-(--bg) w-full min-h-screen">
          <Background>
            <div className="relative z-10">
              <Header />
              <MainSection />
              <AboutSection />
              <RecipeSection />
              <TestimonialsSection />
              <Footer />
            </div>
          </Background>
        </section>
  )    
}

export default App
