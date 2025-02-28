// App.tsx
import Navbar from '@/components/nav-bar'
import Community from '@/pages/Community'
import Events from '@/pages/Events'
import Home from '@/pages/Home'
import Wiki from '@/pages/Wiki'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Toaster } from './components/ui/toaster'
import NotFound from './pages/404'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
