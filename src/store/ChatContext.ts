import { createContext } from "react";
import { MsgActionType } from "./MsgReducer";


export const ChatContext = createContext({} as ChatContextType);

// type ChatContextType = {
//     chatList: ChatType[];
//     inView: number;
//     msg?: MessageType[];
//     setMsg: React.Dispatch<React.SetStateAction<MessageType[]>>;
// };

type ChatContextType = {
    chatList: ChatType[];
    inView: number;
    msg: MessageType[];
    msgD: React.Dispatch<MsgActionType>
};

export type ChatType = {
    id: number;
    name: string;
}

export type MessageType = {
    datetime: string;
    message: string;
    isMe: boolean;
}