import { useContext } from "react";
import { AppContext } from "./AppContext";


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

export const getUser = () => {

    const { userState } = useContext(AppContext);

    return userState;

}

export const setUser = (user: TUserState) => {

    const { userState, userDispatch } = useContext(AppContext);

    userDispatch({ type: UserActions.SetUser, payload: {} })

    return userState;

}