import { Link } from 'react-router-dom';
import FieldText from '../../../components/Form/FieldText'
import Space from '../../../components/Space/Space'
import useForm from '../../../hooks/useForm'
import { useUser } from '../../../hooks/useUser';
import { useLoginMutation } from '@/api/userApi';

function LoginForm() {

    const [loginUser, { data: loginData, isSuccess, isLoading }] = useLoginMutation()

    const { login } = useUser()

    const { formValues, handleChange, handleSubmit } = useForm({
        email: '',
        password: '',
    });

    const onSubmit = (data: typeof formValues) => {

        loginUser(data).unwrap().then(data => {

            login(data)

            console.log('success', data)

        }).catch(err => {

            console.log('err ', err)
            
        });

    }

    return (
        <div className="login-box">

            <h1>Welcome back!</h1>

            <p>Login and start chatting</p>

            <Space v={5} />

            <form className='form form-label-top' onSubmit={handleSubmit(onSubmit)}>

                <div className="row gutter-20 edge">

                    <div className="col col-12">

                        <FieldText
                            name='email'
                            value={formValues.email}
                            label={'Email:'}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col col-12">

                        <FieldText
                            type='password'
                            name='password'
                            value={formValues.password}
                            label={'Password:'}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <Space v={20} />

                <input className='btn btn-primary btn-wide' type="submit" value="Login" />

            </form>

            <div className="space v20"></div>

            <div className="text-center">Or</div>

            <div className="space v20"></div>

            <Link className='btn btn-primary' to={'/register'}>Register</Link>

        </div>
    )
}

export default LoginForm