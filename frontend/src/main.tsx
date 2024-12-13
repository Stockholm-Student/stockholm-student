import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// * Just for debug
// console.log(
//   [
//     'env:',
//     'auth prod domain:' + import.meta.env.VITE_PRODUCTION_DOMAIN || 'No prod domain' 
//     'auth dev domain: ' + import.meta.env.VITE_AUTH_DOMAIN || 'No dev domain',
//     'client id: ' + import.meta.env.VITE_CLIENT_ID || 'No client id'
//   ].join('\n  ')
// )


root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_PROD_AUTH_DOMAIN || import.meta.env.VITE_DEV_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_API_AUDIENCE,
        scope: import.meta.env.VITE_PROVIDER_ALLOWED_SCOPES
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
