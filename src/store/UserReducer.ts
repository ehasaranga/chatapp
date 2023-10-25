export const UserReducer = (state: TUserState, action: TUserAction) => {

    const { type } = action;

    switch (type) {

        case UserActions.Login:

            console.log('user action', action.payload)

            if (action.payload == null) return null;

            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                username: action.payload.username
            }

            break;

        case UserActions.Logout:
            
            return null

            break;
            
        default:
            return state;

    }

}

export enum UserActions {
    Login = 'LOGIN',
    Logout = "LOGOUT"
}

export type TUserAction = TUserActionLogin | TUserActionLogout;

type TUserActionLogin = {
    type: UserActions.Login;
    payload: UserState
}

type TUserActionLogout = {
    type: UserActions.Logout;
}



export type TUserState = UserState | null;

type UserState = {
    id?: string;
    name?: string;
    username: string;
}