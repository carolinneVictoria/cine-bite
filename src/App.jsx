import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/receita/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
