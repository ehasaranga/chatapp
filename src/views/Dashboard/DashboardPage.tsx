import { useEffect, useReducer, useState } from "react";
import { ChatContext } from "../../store/ChatContext"
import MessageList from "./components/MessageList"
import SendMessage from "./components/SendMessage"
import Sidebar from "./components/Sidebar"
import { MsgReducer } from "../../store/MsgReducer";
import { ChatReducer } from "../../store/ChatReducer";

function DashboardPage() {

    const [ chatId, setChatId ] = useState(1);

    const [chatList, chatDispatch] = useReducer(ChatReducer, [
        { id: 1, name: 'Chat 1' },
        { id: 2, name: 'Chat 3' },
        { id: 3, name: 'Chat 4' },
    ]);

    const [msgState, msgDispatch] = useReducer(MsgReducer, [
        { datetime: '', message: "Hi", isMe: true },
        { datetime: '', message: "Hello", isMe: false },
        { datetime: '', message: "How are you?", isMe: true },
        { datetime: '', message: "I'm good. How about you? ", isMe: false },
    ]);


    useEffect(() => {

        //everytime chat room changes load new messages

        //api fetch call for chat id then update msg reducer

        msgDispatch({ type: "UPDATE_MSG", payload: [] })

    }, [chatId, setChatId])

    return (

        <ChatContext.Provider value={{
            inView: chatId,
            setChat: setChatId,
            chatList: chatList,
            chatD: chatDispatch,
            msg: msgState, 
            msgD: msgDispatch
        }}>

        <div className="container no-padding">

            <div className='dashboard'>

                <Sidebar />

                <div className='msg-wrap flex flex-col'>

                    <MessageList />

                    <SendMessage />

                </div>

            </div>

        </div>

        </ChatContext.Provider>

    )
}

export default DashboardPage