import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SongPage from '@/pages/SongPage';
import { LanguageProvider } from '@/context/LanguageContext';

export default function App() {
  return (
    <BrowserRouter basename="/chords">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/song/:id" element={<SongPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
