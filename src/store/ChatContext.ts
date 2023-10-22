import { createContext } from "react";
import { MsgActionType } from "./MsgReducer";


export const ChatContext = createContext({} as TChatContext);

type TChatContext = {
    chatList: TChat[];
    inView: number;
    msg: TMessage[];
    msgD: React.Dispatch<MsgActionType>
};

export type TChat = {
    id: number;
    name: string;
}

export type TMessage = {
    datetime: string;
    message: string;
    isMe: boolean;
}