import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SongPage from '@/pages/SongPage';

export default function App() {
  return (
    <BrowserRouter basename="/chord-sheets">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/song/:id" element={<SongPage />} />
      </Routes>
    </BrowserRouter>
  );
}
