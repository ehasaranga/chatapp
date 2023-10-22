
export const MsgReducer = (state:TMessageState, action:TMsgAction) => {

    const { type, payload } = action;

    const currentChatList = state[payload.chatId] || []

    switch(type) {

        case 'UPDATE_MSG':

            console.log(currentChatList)

            return {
                ...state,
                [payload.chatId]: [...currentChatList , ...payload.msgs]
            };
            break;

        case 'SEND_MESSAGE':

            if (payload.msg === "") return state;

            return {
                ...state, 
                [payload.chatId]: [...currentChatList, {datetime: '', message: payload.msg, isMe: true }]
            };
            break;

        default:
            return state;

    }

}

export type TMessageState = {
    [chatId: number]: TMessage[]
    
}

export type TMessage = {
    datetime: string;
    message: string;
    isMe: boolean;
}

export type TMsgAction =  TMsgSendAction | TMsgUpdateAction;

type TMsgSendAction = {
    type: 'SEND_MESSAGE';
    payload: {
        chatId: number,
        msg: string
    };
}

type TMsgUpdateAction = {
    type: 'UPDATE_MSG';
    payload: {
        chatId: number,
        msgs: TMessage[]
    };
}