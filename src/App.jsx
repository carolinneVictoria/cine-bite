import './App.css'
import Header from './components/Header'
import MainSection from './components/MainSection'

function App() {

  return (
    <div className="bg-(--bg) w-full min-h-screen">
      <div className="absolute top-[-286px] left-[282px] w-[400px] h-[400px]
                  rounded-full bg-[#7B7B7F]/90 blur-[120px]" />

      <div className="absolute bottom-0 top-[446px] left-[1253px] w-[451px] h-[451px]
                  rounded-full bg-[#8CC5CF]/100 blur-[130px]" />
      <div className="relative z-10">
        
        <Header />
        <MainSection />
      </div>
    </div>
  )
}

export default App
