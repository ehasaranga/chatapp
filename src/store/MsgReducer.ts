import { MessageType } from "./ChatContext";

export const MsgReducer = (state:MessageType[], action:MsgActionType) => {

    const { type, payload } = action;

    switch(type) {

        case 'SEND_MESSAGE':

            if (payload === "") return state;

            return [
                ...state, 
                { datetime: '', message: payload, isMe: true }
            ];

        default:
            return state;

    }

}


export type MsgActionType = {
    type: 'SEND_MESSAGE';
    payload: string;
}