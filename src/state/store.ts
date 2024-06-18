
import { baseApi } from "@/api/baseApi";
import chatSlice from "@/state/chatSlice";
import msgSlice from "@/state/msgSlice";
import userSlice from "@/state/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        user: userSlice,
        chats: chatSlice,
        msgs: msgSlice,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: import.meta.env.MODE === 'development' ? true : false
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


setupListeners(store.dispatch)