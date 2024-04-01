import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Auth/Login"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login/" />
}

function App(){
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path="/login" element={<Login />} />
    
    </Routes>
    </BrowserRouter>
  )
}

// function App(){
//   return (
//     <div>
//       <Home/>
//     </div>
    
//   )
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="*" element={<NotFound />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App