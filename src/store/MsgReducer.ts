
export const MsgReducer = (state:TMessage[], action:TMsgAction) => {

    const { type, payload } = action;

    switch(type) {

        case 'UPDATE_MSG':

            return [...payload];
            break;

        case 'SEND_MESSAGE':

            if (payload === "") return state;

            return [
                ...state, 
                { datetime: '', message: payload, isMe: true }
            ];
            break;

        default:
            return state;

    }

}




export type TMessage = {
    datetime: string;
    message: string;
    isMe: boolean;
}

export type TMsgAction =  TMsgSendAction | TMsgUpdateAction;

type TMsgSendAction = {
    type: 'SEND_MESSAGE';
    payload: string;
}

type TMsgUpdateAction = {
    type: 'UPDATE_MSG';
    payload: TMessage[];
}