import { useEffect, useState } from "react";
import MessageList from "./components/MessageList"
import SendMessage from "./components/SendMessage"
import Sidebar from "./components/Sidebar"
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { RootState } from "@/state/store";
import { updateMsgs } from "@/state/msgSlice";

function DashboardPage() {

    const [chatId, setChatId] = useState(0);

    const { inView } = useAppSelector((state:RootState) => state.chats)

    const dispatch = useAppDispatch();

    useEffect(() => {

        //everytime chat room changes load new messages

        //api fetch call for chat id then update msg reducer

        dispatch(updateMsgs({chatId: chatId, msgs: []}))

    }, [chatId, setChatId])

    return (

        <div className="container no-padding">

            <div className='dashboard'>

                <Sidebar />

                <div className='msg-wrap flex flex-col'>

                    {inView !== null ? 
                    <>

                        <MessageList />

                        <SendMessage />


                    </> : 

                    <div className="container content-center text-center">

                        <div className="">
                            <h2>To get started</h2>
                            <h3>Create a Chat</h3>

                        </div>
                        
                    </div>
                    
                    }

                </div>

            </div>

        </div>

    )
}

export default DashboardPage