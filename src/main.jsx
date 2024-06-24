import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserDetailsProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDetailsProvider>
    <App />
    </UserDetailsProvider>
  </React.StrictMode>,
)
