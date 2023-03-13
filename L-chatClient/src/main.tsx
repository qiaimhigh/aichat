import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './static/css/base.scss'
import './static/css/base.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
)
