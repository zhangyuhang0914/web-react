import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/import.styl'

const app = ReactDOM.createRoot(document.getElementById('root')!)
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
