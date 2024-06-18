import { baseApi } from "@/api/baseApi";
import { UserState } from "@/state/userSlice";

interface LoginReq {
    email: string;
    password: string;
}


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserState, LoginReq>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST'
            }),
        })
    })
})


export const { useLoginMutation, useLogoutMutation } = userApi