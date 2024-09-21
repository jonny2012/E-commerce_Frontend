import { LoginForm } from "modules/UserLoginSignUp/LoginModule/LoginForm"
import { userApi } from "../../services/UserServices"
import LoginImg from "./../../assets/SignUpLogin_Image.jpg"
import styles from "./Login.module.scss"
import { User } from "../../services/UserServices"
import { useState } from "react"


export const Login= ()=>{

const Userdata:Partial<User> = {
   email:"ec@yuiymail.com",
    password:"2222"
}
const [result, setResult]= useState("")

 const {data}= userApi.useGetLoginUserQuery(Userdata)
//  const {} = userApi.useCheckAuthQuery("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiZWNAeXVtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNjQzNTkwMywiZXhwIjoxNzI2NDM5NTAzfQ.q7TJhaVgZQPwurnegxeKsA5PesH2EsMZR7IPUaNfMhk")
 console.log(data)

    return (
        <section className={styles.loginContainer} >
          <div className={styles.login}>
          <img className={styles.img} src={LoginImg} alt="login-image" />
          <LoginForm/>  
          </div>
        </section>
    )
}