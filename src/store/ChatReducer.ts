
export const ChatReducer = (state: TChat[], action: TChatAction) => {

    const { type, payload } = action;

    switch (type) {

        case TChatActionType.Create: 

            return [...state, { id: state.length + 1, name: payload.name }] as TChat[]

            break;  

        default: 
            return state;

    }

}

export enum TChatActionType {
    Create = 'CREATE',
}


export type TChat = {
    id: number;
    name: string;
}

export type TChatAction = {
    type: TChatActionType.Create;
    payload: TChat;
}