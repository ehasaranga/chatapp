
export const ChatReducer = (state: TChat[], action: TChatAction) => {

    const { type, payload } = action;

    switch (type) {

        case 'CREATE': 

            return [...state, { id: state.length + 1, name: payload.name }] as TChat[]

            break;  

        default: 
            return state;

    }

}


export type TChat = {
    id?: number;
    name: string;
}

export type TChatAction = {
    type: 'CREATE';
    payload: TChat;
}