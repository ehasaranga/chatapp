import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
    id: string;
    name: string;
    email: string;
    role: string;
}

const userSlice = createSlice({
    name: 'user',
    initialState: null as unknown as UserState,
    reducers: {
        userLogin: (state, action: PayloadAction<UserState>) => {
            return action.payload
        },
        userLogout: () => {
            return null as any
        }

    }
})


export default userSlice.reducer
export const { userLogin, userLogout } = userSlice.actions