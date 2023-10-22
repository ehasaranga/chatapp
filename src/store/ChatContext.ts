import { createContext } from "react";
import { TChat, TChatAction } from "./ChatReducer";
import { TMessage, TMsgAction } from "./MsgReducer";


export const ChatContext = createContext({} as TChatContext);

type TChatContext = {
    inView: number;
    chatList: TChat[];
    chatD: React.Dispatch<TChatAction>;
    msg: TMessage[];
    msgD: React.Dispatch<TMsgAction>
};

