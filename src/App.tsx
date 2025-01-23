import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;