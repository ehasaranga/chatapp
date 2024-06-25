import { Link } from 'react-router-dom';
import Space from '../../../components/Space/Space'
import { useUser } from '../../../hooks/useUser';
import { useLoginMutation } from '@/api/userApi';
import FieldInput from '@/components/Form/FieldInput';
import { z } from 'zod';
import { Form, useForm } from 'react-ezform';

function LoginForm() {

    const [loginUser, { data: loginData, isSuccess, isLoading }] = useLoginMutation()

    const { login } = useUser()

    const {register, ...loginForm} = useForm({
        initVal: {
            email: '',
            password: ''
        },
        onSubmit: (val, ctx) => {

            ctx.reset()

            // loginUser(val).unwrap().then(data => {

            //     login(data)

            //     console.log('success', data)

            // }).catch(err => {

            //     ctx.setErrors(err.data.errors)

            //     console.log('err ', err)

            // });

        },
        validate: (val) => {

            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(4)
            })

            return schema.safeParse(val).error?.flatten().fieldErrors
            
        }
    });

    return (
        <div className="login-box">

            <h1>Welcome back!</h1>

            <p>Login and start chatting</p>

            <Space v={5} />

            <Form hook={loginForm}>

                <div className="row gutter-20 edge">

                    <div className="col col-12">

                        <FieldInput

                            {...register({
                                name: 'email',
                                label: 'Email:'
                            })}

                        />


                    </div>

                    <div className="col col-12">


                        {/* <FieldInput
                            type='password'
                            name='password'
                            label={'Password:'}
                        /> */}

                        <FieldInput
                            {...register({
                                name: 'password',
                                type: 'password',
                                label: 'Password:',
                            })}
                        />


                    </div>

                </div>

                <Space v={20} />

                <input className='btn btn-primary btn-wide' type="submit" value="Login" />


            </Form>

            <div className="space v20"></div>

            <div className="text-center">Or</div>

            <div className="space v20"></div>

            <Link className='btn btn-primary' to={'/register'}>Register</Link>

        </div>
    )
}

export default LoginForm