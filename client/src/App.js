import React from "react"
import {useRoutes} from "./routes"
import { BrowserRouter as Router } from "react-router-dom"
import Nav from './components/Nav/'


function App() {
  const routes = useRoutes()

  return (
    <Router>
    <div className="main">
      <Nav className="navbar" />
      {routes}
    </div>
    </Router>
  )
}

export default App
