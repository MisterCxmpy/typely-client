import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TypingConfigProvider } from './contexts/TypingConfigContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TypingConfigProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TypingConfigProvider>
)
