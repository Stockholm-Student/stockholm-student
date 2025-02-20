// App.tsx
import Navbar from '@/components/nav-bar'
import Community from '@/pages/Community'
import Events from '@/pages/Events'
import Home from '@/pages/Home'
import More from '@/pages/More'
import Wiki from '@/pages/Wiki'
import { ThemeProvider } from '@/provider/theme-provider'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Toaster } from './components/ui/toaster'
import AuthenticationProvider from './provider/auth-provider'

function App() {
  return (
    <AuthenticationProvider>
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
    </AuthenticationProvider>
  )
}

export default App
