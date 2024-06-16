import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initChat = {
    inView: null, 
    chats: []
} as ChatContext


const chatSlice = createSlice({
    name: 'chats',
    initialState: initChat,
    reducers: {
        createChat: (state, action: PayloadAction<TChat>) => {

            state.chats.push(action.payload)

        },
        updateInViewChat: (state, action: PayloadAction<number>) => {
            state.inView = action.payload
        }
    }
})


type ChatContext = {
    inView: number | null;
    chats: TChat[]
}

type TChat = {
    id: number;
    name: string;
}

export default chatSlice.reducer
export const { createChat, updateInViewChat } = chatSlice.actions

