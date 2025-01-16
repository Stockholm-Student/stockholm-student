// App.tsx
import Navbar from '@/components/nav-bar'
import { ThemeProvider } from '@/components/theme-provider'
import Community from '@/pages/Community'
import Events from '@/pages/Events'
import Home from '@/pages/Home'
import More from '@/pages/More'
import Wiki from '@/pages/Wiki'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="relative min-h-screen">
          <Navbar />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/more" element={<More />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
