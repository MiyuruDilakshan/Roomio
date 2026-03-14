import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/designer/dashboard';
import Portfolio from './pages/designer/portfolio';
import Clients from './pages/designer/clients';
import Library from './pages/designer/library';
import Inspiration from './pages/designer/inspiration';
import Settings from './pages/designer/settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/designer/dashboard" element={<Dashboard />} />
        <Route path="/designer/portfolio" element={<Portfolio />} />
        <Route path="/designer/clients" element={<Clients />} />
        <Route path="/designer/library" element={<Library />} />
        <Route path="/designer/inspiration" element={<Inspiration />} />
        <Route path="/designer/settings" element={<Settings />} />
        
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;