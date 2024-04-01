import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Home from "./pages/Home"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login/" />
}

function App(){
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App