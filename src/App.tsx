import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Painters from './pages/Painters';
import PainterDetail from './pages/PainterDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter basename="/let-love-fly/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="painter" element={<Painters />} />
          <Route path="painter/:id" element={<PainterDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
