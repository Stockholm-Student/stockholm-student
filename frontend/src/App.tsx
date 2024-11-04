// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import Community from '../../frontend/src/pages/Community';
import Events from '../../frontend/src/pages/Events';
import Home from '../../frontend/src/pages/Home';
import More from '../../frontend/src/pages/More';
import Wiki from '../../frontend/src/pages/Wiki';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;