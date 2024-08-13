import { Link } from 'react-router-dom';
import Space from '../../../components/Space/Space'
import { useUser } from '../../../hooks/useUser';
import { useLoginMutation } from '@/api/userApi';
import FieldInput from '@/components/Form/FieldInput';
import { z } from 'zod';
import { useForm } from 'react-ezform';
import { Form } from '@/components/Form/Form';
import Button from '@/components/Button/Button';
import { Message } from '@/components/Message/Message';

function LoginForm() {

    const [loginUser, { data: loginData }] = useLoginMutation()

    const { login } = useUser()

    const loginForm = useForm({
        initVal: {
            email: '',
            password: '',
        },
        onSubmit: async (val, ctx) => {

            await loginUser(val).unwrap().then(data => {

                login(data)

                console.log('success', data)

            }).catch(err => {

                ctx.setErrors({
                    ...err.data.errors
                })

                if (err.status === 401) loginForm.setMsg('Please check your username & password !');

                console.log('err ', err)

            });

        },
        validate: (val) => {

            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(4)
            })

            return schema.safeParse(val).error?.flatten().fieldErrors

        }
    });

    const { isWaiting } = loginForm

    return (
        <div className="login-box">

            <h1>Welcome back!</h1>

            <p>Login and start chatting</p>

            <Space v={5} />

            <Form hook={loginForm}>

                <div className="row gutter-20 edge">

                    <div className="col col-12 test">

                        <FieldInput name="email" label="Email:" />

                    </div>

                    <div className="col col-12">

                        <FieldInput name="password" label="Password:" type='password' />

                    </div>

                </div>



                {loginForm.msg &&
                    <>
                        <Space v={20} />
                        <Message type='error' text={loginForm.msg} />
                    </>
                }

                <Space v={20} />

                <Button label='Login' loading={isWaiting} type='submit' className='btn-wide' />

            </Form>

            <div className="space v20"></div>

            <div className="text-center">Or</div>

            <div className="space v20"></div>

            <Link className='btn btn-primary' to={'/register'}>Register</Link>

        </div>
    )
}

export default LoginForm