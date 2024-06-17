
import chatSlice from "@/state/chatSlice";
import msgSlice from "@/state/msgSlice";
import userSlice from "@/state/userSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        user: userSlice,
        chats: chatSlice,
        msgs: msgSlice
    },
    devTools: import.meta.env.PROD ? false : true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;