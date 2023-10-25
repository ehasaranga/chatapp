import { useApp } from "../store/AppContext"
import { UserActions } from "../store/UserReducer"

export const useUser = () => {

    const { userState, userDispatch } = useApp()

    function login (loginDetails:any) {
    
        userDispatch({ type: UserActions.Login, payload: loginDetails })
    
    }

    function logout () {
    
        userDispatch({ type: UserActions.Logout })
    
    }

    function auth() {

        if (userState?.username != '' && userState != null) return true;

        return false;

    }

    return {
        user:userState,
        login, 
        auth,
        logout
    }

}