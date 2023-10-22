import { useState } from "react";
import { ChatContext } from "../../store/ChatContext"
import MessageList from "./components/MessageList"
import SendMessage from "./components/SendMessage"
import Sidebar from "./components/Sidebar"

function DashboardPage() {

    const [chatList, setChatList] = useState([
        { id: 1, name: 'Chat 1' },
        { id: 2, name: 'Chat 3' },
        { id: 3, name: 'Chat 4' },
    ]);

    return (

        <ChatContext.Provider value={{
            chatList: chatList
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