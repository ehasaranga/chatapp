import { Navigate, Outlet} from "react-router-dom"
import { useUser } from "../../hooks/useUser";

export const PrivateLayout = () => {

    const { auth, user } = useUser();

    console.log('in private', user, auth());

    if (!auth()) return <Navigate to="/login" />;

    return <Outlet />
    
}