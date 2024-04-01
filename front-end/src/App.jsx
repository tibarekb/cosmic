import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Auth/Login"
import NotFound from "./pages/Auth/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function App(){
  <Route path="/login" element={<Login />}></Route>
}


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