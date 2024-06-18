import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

const userSlice = createSlice({
    name: 'user',
    initialState: null as unknown as UserState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return action.payload
        },
        userLogout: () => {
            return null as any
        }

    }
})


export default userSlice.reducer
export const { setUser, userLogout } = userSlice.actions