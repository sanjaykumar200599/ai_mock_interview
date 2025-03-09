import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

import { PublicLayout } from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"
import { MainLayout } from "./layouts/main-layout"

import HomePage from "@/routes/home"
import { SignInPage } from "./routes/sign-in"
import { SignUpPage } from "./routes/sign-up"
import { ProtectRoutes } from "./layouts/protected-routes"


const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public routes*/}
        <Route element={<PublicLayout/>}>
        <Route index element={<HomePage/>}/>
        </Route>

        {/* {authentication layout} */}
        <Route element={<AuthenticationLayout/>}>
        <Route path="/signin/*" element={<SignInPage/>}/>
        <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>


        {/*Protected routes*/}
        <Route element={<ProtectRoutes><MainLayout/></ProtectRoutes>}>

    {/* {add all the protect routes} */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App