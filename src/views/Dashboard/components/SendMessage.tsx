
import './SendMessage.scoped.scss';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { RootState } from '@/state/store';
import { sendMessage } from '@/state/msgSlice';
import FieldInput from '@/components/Form/FieldInput';
import { Form, useForm } from 'react-ezform';

const SendMessage: React.FC = () => {

    const { inView } = useAppSelector((state: RootState) => state.chats);

    const dispatch = useAppDispatch();

    const sendMsg = useForm({
        initVal: {
            msg: ""
        },
        onSubmit: (val, ctx) => {

            if (val.msg === '' || inView === null) return;

            console.log('in sending ', inView, val.msg)

            dispatch(sendMessage({ chatId: inView, msg: val.msg }))

            ctx.reset()

            console.log(val)

        }
    });

    return (
        <div className="send-message-wrap">

            <Form hook={sendMsg}>

                <div className="row gutter-10 edge">

                    <div className="col col-a">

                        <FieldInput
                            className='msg-input'
                            name='msg'
                            placeholder={'Type Your Message'}
                        />

                    </div>

                    <div className='col'>

                        <button className={'btn btn-primary btn-send'}>Send</button>

                    </div>

                </div>

            </Form>


        </div>
    )
}

export default SendMessage;
