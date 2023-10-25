import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "../../hooks/useUser";


export const LoginRedirect = () => {

    const { auth } = useUser();

    if (auth()) return <Navigate to={'/'} />


    return <Outlet />

}