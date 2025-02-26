import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthenticationProvider from './provider/auth-provider'
import { ThemeProvider } from './provider/theme-provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </AuthenticationProvider>
  </React.StrictMode>
)
