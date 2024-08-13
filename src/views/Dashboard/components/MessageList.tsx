
import { useEffect, useRef } from 'react'
import './MessageList.scoped.scss'
import MessageRow from './MessageRow';
import { scrollToBottom } from '../../../utils';
import { useAppSelector } from '@/state/hooks';
import { RootState } from '@/state/store';

const MessageList: React.FC = () => {


    const { inView } = useAppSelector((state:RootState) => state.chats);

    const msg = useAppSelector((state:RootState) => state.msgs);

    const messages = inView === null ? [] : msg[inView];

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