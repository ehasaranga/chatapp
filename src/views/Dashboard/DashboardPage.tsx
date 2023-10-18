import MessageList from "./components/MessageList"
import SendMessage from "./components/SendMessage"
import Sidebar from "./components/Sidebar"

function DashboardPage() {

    return (

        <div className="container no-padding">

            <div className='dashboard'>

                <Sidebar />

                <div className='msg-wrap flex flex-col'>

                    <MessageList />

                    <SendMessage />

                </div>

            </div>

        </div>

    )
}

export default DashboardPage