
import FieldText from '../../../components/Form/FieldText';
import { useForm } from '../../../hooks/useForm';
import './SendMessage.scoped.scss';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { RootState } from '@/state/store';
import { sendMessage } from '@/state/msgSlice';

const SendMessage: React.FC = () => {

    const { inView } = useAppSelector((state:RootState) => state.chats);

    const dispatch = useAppDispatch();

    const { values:formValues, handleChange, handleSubmit, reset } = useForm({
        msg: ""
    });

    const onSubmit = (value: typeof formValues) => {
        
        if (value.msg === '' || inView === null) return;

        console.log('in sending ', inView, value.msg)

        dispatch(sendMessage({ chatId: inView, msg: value.msg }))

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
