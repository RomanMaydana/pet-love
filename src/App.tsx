import { Header } from '@/components/Header'
import { Routes, Route } from 'react-router'
import './App.css'
import HomePage from '@/pages/Home'
import AdoptPage from '@/pages/Adopt'
import NotFoundPage from '@/pages/404'
function App () {

  return (
    <div className='text-[#0d1b0d]'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div >
  )
}

export default App
