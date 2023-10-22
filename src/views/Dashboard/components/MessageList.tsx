
import { useEffect, useRef } from 'react'
import './MessageList.scoped.scss'
import MessageRow from './MessageRow';


const scrollToBottom = (ref:any) => {

    if (ref.current === null) return;

    let clientHeight:number = ref.current?.clientHeight || 0;
    let scrollHeight = ref.current?.scrollHeight || 0;

    ref.current.scrollTop = (scrollHeight - clientHeight)
    
}

const MessageList: React.FC = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        scrollToBottom(scrollRef)

    }, [])

    return (
        <div className='message-list-wrap' ref={scrollRef}>

            <MessageRow byMe />

            <MessageRow />

            <MessageRow byMe />


        </div>
    )
}

export default MessageList