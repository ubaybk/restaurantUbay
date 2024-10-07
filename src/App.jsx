import { BrowserRouter, Routes, Route } from "react-router-dom"
import { route } from "./route"
import { useRoutes } from "react-router-dom"


function App() {
  const element = useRoutes(route)

  return element
    
}

export default App
