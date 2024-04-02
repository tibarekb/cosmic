import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import Add_Customer from "./pages/customer/add_customer"
// import Register from "./pages/Auth/Register"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login/" />
}

function App(){
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
    {/* <Route path="/add_customer" element={<ProtectedRoute><Add_Customer /></ProtectedRoute>}/> */}
    <Route path="/add_customer" element={<Add_Customer />} />
    <Route path="/login" element={<Login />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App