
import FieldText from '../../../components/Form/FieldText';
import useForm from '../../../hooks/useForm';
import './SendMessage.scoped.scss';
import { useChat } from '../../../store/ChatContext';

const SendMessage: React.FC = () => {

    const { msgD, inView } = useChat();

    const { formValues, handleChange, handleSubmit, reset } = useForm({
        msg: ""
    });

    const onSubmit = (value: typeof formValues) => {
        
        if (value.msg === '') return;

        msgD({ type: 'SEND_MESSAGE', payload: { chatId: inView, msg:value.msg} })

        reset()

    }

    return (
        <div className="send-message-wrap">

            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className="row gutter-10 edge">

                    <div className="col col-a">

                        <FieldText
                            className='msg-input'
                            name='msg'
                            onChange={handleChange}
                            value={formValues.msg}
                            placeholder={'Type Your Message'}
                        />

                    </div>

                    <div className='col'>

                        <button className={'btn btn-primary btn-send'}>Send</button>

                    </div>

                </div>

            </form>


        </div>
    )
}

export default SendMessage;
