
import { useContext, useEffect, useRef } from 'react'
import './MessageList.scoped.scss'
import MessageRow from './MessageRow';
import { ChatContext } from '../../../store/ChatContext';


const scrollToBottom = (ref:any) => {

    if (ref.current === null) return;

    let clientHeight:number = ref.current?.clientHeight || 0;
    let scrollHeight = ref.current?.scrollHeight || 0;

    ref.current.scrollTop = (scrollHeight - clientHeight)
    
}

const MessageList: React.FC = () => {

    const { msg, inView } = useContext(ChatContext);

    const messages = msg[inView];

    const scrollRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {

    //     scrollToBottom(scrollRef)

    // }, [])

    return (

        <div className="message-list-container">
            
            <div className='message-list-wrap' ref={scrollRef}>


                {messages && messages.map((item, i) => (
                    <MessageRow 
                        key={i} 
                        byMe={item.isMe} 
                        message={item.message} 
                    />
                ))}


            </div>

        </div>
    )
}

export default MessageList