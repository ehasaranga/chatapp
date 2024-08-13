import './Message.scoped.scss';

export const Message: React.FC<MessageProps> = (props) => {

    const { text, type } = props;

    return (
        <div className={`${type} message-wrap`}>{text}</div>
    )
}

type MessageProps = {
    text: string | string[] | undefined;
    type: 'warn' | 'error' | 'success' | 'info';
}
