import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const msgSlice = createSlice({
    name: 'message',
    initialState: {} as TChatMsgState,
    reducers: {
        updateMsgs: (state, action: PayloadAction<{ chatId: number, msgs: TMessage[] }>) => {

            const { msgs, chatId } = action.payload;

            const currentMsgs = state[chatId] ?? []

            state[chatId] = [...currentMsgs, ...msgs]

        },
        sendMessage: (state, action: PayloadAction<{ chatId: number, msg: string }>) => {

            const { msg, chatId } = action.payload;

            const currentMsgs = state[chatId] ?? []

            state[chatId] = [...currentMsgs, { datetime: '', isMe: true, message: msg}]

        }

    }
})


export default msgSlice.reducer;
export const { sendMessage, updateMsgs } = msgSlice.actions;



type TChatMsgState = {
    [chatId: number]: TMessage[]
    
}

type TMessage = {
    datetime: string;
    message: string;
    isMe: boolean;
}
