// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import 'bootstrap/dist/css/bootstrap.min.css';  // ✅ Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS (for modals, dropdowns, etc.)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { AuthProvider } from './context/AuthContext.jsx';



AOS. init({duration: 1000, once: true});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
