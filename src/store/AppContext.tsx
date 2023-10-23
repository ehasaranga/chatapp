import { createContext, useReducer } from "react";
import { TUserAction, TUserState, UserReducer } from "./UserReducer";


export const AppContext = createContext({} as TAppContext);

type TAppContext = {
    userState: TUserState;
    userDispatch: React.Dispatch<TUserAction>;
}

type TAppContextProps = {
    children?: React.ReactNode;
}


export const AppContextProvider = ({ children }: TAppContextProps) => {

    const [ userState, userDispatch ] = useReducer(UserReducer, {});


    return <AppContext.Provider value={{userState, userDispatch}}>{children}</AppContext.Provider>

}