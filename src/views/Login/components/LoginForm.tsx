import { Link, useNavigate } from 'react-router-dom';
import FieldText from '../../../components/Form/FieldText'
import Space from '../../../components/Space/Space'
import useForm from '../../../hooks/useForm'
import { useUser } from '../../../hooks/useUser';

function LoginForm() {

    const { login } = useUser()

    const navigate = useNavigate();

    const {formValues, handleChange, handleSubmit} = useForm({
        username: '',
        password: '',
    });

    const onSubmit = (data: typeof formValues) => {

        console.log(data)

        login(data)

        navigate('/');

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
                            name='username'
                            value={formValues.username}
                            label={'Username:'}
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