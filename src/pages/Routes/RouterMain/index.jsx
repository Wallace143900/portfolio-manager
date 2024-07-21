import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../HomePage"
import { RegisterPage } from "../../RegisterPage"
import { Login } from "../../Login"

export const RouterMain = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<RegisterPage />}/>
            </Route>
            <Route>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}
