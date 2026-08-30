import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SongPage from '@/pages/SongPage';
import LanguageToggle from '@/components/LanguageToggle';
import { LanguageProvider } from '@/context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/chords">
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/song/:id" element={<SongPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
