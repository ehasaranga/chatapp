import { createContext } from "react";


export const ChatContext = createContext({} as ChatContextType);

type ChatContextType = {
    chatList: Chat[];
};

type Chat = {
    id: number;
    name: string;
}