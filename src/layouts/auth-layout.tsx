import { Outlet } from "react-router-dom"
const AuthenticationLayout= () => {
  return (
    <div>
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <img src="/assets/img/bg.png" className="absolute w-full h-full object-cover opacity-20" alt="" />

            <Outlet/>
        </div>
    </div>
  )
}

export default AuthenticationLayout