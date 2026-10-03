
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CoinDetailPage from './pages/CoinDetailPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/dashboard/coin/:coinName' element={<CoinDetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
