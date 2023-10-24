import { useApp } from "./AppContext";


export const UserReducer = (state: TUserState, action: TUserAction) => {

    const { type, payload } = action;

    return state

}

export enum UserActions {
    SetUser = 'SET_USER',
}

export type TUserAction = {
    type: UserActions;
    payload: any;
}


export type TUserState = {
    id?: string;
    name?: string;
    username?: string;
}

export const useUser = () => {

    const { userState, userDispatch } = useApp()

    const get = () => userState

    const setUser = (user: TUserState) => {
    
        userDispatch({ type: UserActions.SetUser, payload: {} })
    
        return userState;
    
    }

    return {
        get,
        setUser, 
    }

}