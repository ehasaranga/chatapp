
import { useEffect, useRef } from 'react'
import './MessageList.scoped.scss'
import MessageRow from './MessageRow';
import { useChat } from '../../../store/ChatContext';
import { scrollToBottom } from '../../../utils';

const MessageList: React.FC = () => {

    const { msg, inView } = useChat();

    const messages = msg[inView];

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        scrollToBottom(scrollRef)

    }, [messages])

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