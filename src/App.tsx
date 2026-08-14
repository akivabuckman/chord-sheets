import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import SongPage from '@/pages/SongPage'

export default function App() {
  return (
    <BrowserRouter basename="/chord-sheets">
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/song/:id" element={<SongPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
