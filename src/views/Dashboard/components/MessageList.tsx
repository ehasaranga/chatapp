
import { useEffect, useRef } from 'react'
import './MessageList.scoped.scss'
import MessageRow from './MessageRow';

const MessageList: React.FC = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        scrollToBottom()

    }, [])

    const scrollToBottom = () => {

        if (scrollRef.current === null) return;

        let clientHeight:number = scrollRef.current?.clientHeight || 0;
        let scrollHeight = scrollRef.current?.scrollHeight || 0;

        scrollRef.current.scrollTop = (scrollHeight - clientHeight)
        
    }

    return (
        <div className='message-list-wrap' ref={scrollRef}>

            <MessageRow byMe />

            <MessageRow />

            <MessageRow byMe />


        </div>
    )
}

export default MessageList