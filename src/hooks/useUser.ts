import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { RootState } from "@/state/store"
import { setUser, userLogout } from "@/state/userSlice"

export const useUser = () => {

    const user = useAppSelector((state:RootState) => state.user)

    const dispatch = useAppDispatch()

    function login (loginDetails:any) {

        dispatch(setUser(loginDetails))
    
    }

    function logout () {
    
        dispatch(userLogout())
    
    }

    function auth() {

        if (user?.email !== '' && user !== null) return true;

        return false;

    }

    return {
        user:user,
        login, 
        auth,
        logout
    }

}