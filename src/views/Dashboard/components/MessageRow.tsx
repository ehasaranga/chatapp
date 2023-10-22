import './MessageRow.scoped.scss'

const MessageRow: React.FC<IMessageRow> = (props) => {

    const side = props.byMe ? 'right' : 'left';

    return (
        <div className={`message-row ${side}`}>

            <div className="msg">{props.message}</div>

        </div>
    )
}

export default MessageRow


interface IMessageRow{
    byMe?: boolean;
    message: string;
}