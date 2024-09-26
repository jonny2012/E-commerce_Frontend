import { Route, Routes } from "react-router-dom"
import { Footer } from "./modules/Footer/Footer"
import { Header } from "./modules/Header/Header"
import { Line } from "./components/ui/Line"
import { HomePage } from "./pages/HomePage/HomePage"
import { SignUp } from "./pages/Register/SignUp"
import { Login } from "./pages/Login/Login"

 export const AppRouter = ()=>{
    
    return (
        <>
        <Header  />
        <Line/>
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/register" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>


        </Routes>
        <Footer/>
        </>
    )
}