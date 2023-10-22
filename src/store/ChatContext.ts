import { createContext } from "react";
import { TChat, TChatAction } from "./ChatReducer";
import { TMessageState, TMsgAction } from "./MsgReducer";


export const ChatContext = createContext({} as TChatContext);

type TChatContext = {
    inView: number;
    setChat: React.Dispatch<React.SetStateAction<number>>;
    chatList: TChat[];
    chatD: React.Dispatch<TChatAction>;
    msg: TMessageState;
    msgD: React.Dispatch<TMsgAction>
};

