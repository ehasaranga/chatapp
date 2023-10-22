
export const MsgReducer = (state:TMessage[], action:TMsgAction) => {

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


export type TMessage = {
    datetime: string;
    message: string;
    isMe: boolean;
}

export type TMsgAction = {
    type: 'SEND_MESSAGE';
    payload: string;
}