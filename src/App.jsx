import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/GlobalStyles';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

export default function App() {
  return (
    <div style={{ background: '#1B1730', color: '#F2EFEA' }} className="min-h-screen font-sans">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
