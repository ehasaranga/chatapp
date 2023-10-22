import { createContext } from "react";
import { MsgActionType } from "./MsgReducer";
import { TChatAction } from "./ChatReducer";


export const ChatContext = createContext({} as TChatContext);

type TChatContext = {
    chatList: TChat[];
    chatD: React.Dispatch<TChatAction>;
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