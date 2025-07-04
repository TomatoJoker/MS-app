import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './assets/styles/global.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/MS-app">
        <App />
    </BrowserRouter>
)
