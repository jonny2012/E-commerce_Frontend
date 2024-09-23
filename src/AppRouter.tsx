import { Route, Routes } from "react-router-dom"
import { Footer } from "./modules/Footer/Footer"
import { Header } from "./modules/Header/Header"
import { Line } from "./Components/ui/Line"
import { HomePage } from "./Pages/HomePage/HomePage"
import { SignUp } from "./Pages/Register/SignUp"
import { Login } from "./Pages/Login/Login"


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