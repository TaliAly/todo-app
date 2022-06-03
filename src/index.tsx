import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.scss"

// *** components
import Main from "./components/Main"
import Header from "./components/Header"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
)
