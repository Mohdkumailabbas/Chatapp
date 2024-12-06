import './index.css';
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const { authUser, isLoading } = useAuthContext();
console.log("Auth user",authUser )
console.log("isloading",isLoading)
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ?<Home/>: <Navigate to={"/login"}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
