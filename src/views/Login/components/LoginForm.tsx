import { Link } from 'react-router-dom';
import Space from '../../../components/Space/Space'
import { useForm } from '../../../hooks/useForm'
import { useUser } from '../../../hooks/useUser';
import { useLoginMutation } from '@/api/userApi';
import { Form } from '@/components/Form/Form';
import FieldInput from '@/components/Form/FieldInput';

function LoginForm() {

    const [loginUser, { data: loginData, isSuccess, isLoading }] = useLoginMutation()

    const { login } = useUser()

    const loginForm = useForm({
        initVal: {
            email: '',
            password: ''
        },
        onSubmit: (val, setErrors) => {

            loginUser(val).unwrap().then(data => {

                login(data)

                console.log('success', data)

            }).catch(err => {

                setErrors(err.data.errors)

                console.log('err ', err)

            });

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
                            name='email'
                            label={'Email:'}
                        />


                    </div>

                    <div className="col col-12">


                        <FieldInput
                            type='password'
                            name='password'
                            label={'Password:'}
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