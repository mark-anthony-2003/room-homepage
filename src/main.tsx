import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RoomHomepageProvider } from './context/RoomHomepageProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RoomHomepageProvider>
    <App />
  </RoomHomepageProvider>,
)
