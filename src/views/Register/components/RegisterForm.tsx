
import { Link } from 'react-router-dom';
import Space from '../../../components/Space/Space';
import { useForm } from '../../../hooks/useForm';
import { Form } from '@/components/Form/Form';
import FieldInput from '@/components/Form/FieldInput';

function RegisterForm() {

	const registerForm = useForm({
		initVal: {
			username: '',
			password: '',
			confirm_password: '',
		},
		onSubmit: (val, ctx) => {

			console.log(val)

		}
	});

	return (
		<div className="login-box">

			<h1>Hi, there!</h1>

			<p>Create an account to start chatting</p>

			<Space v={5} />

			<Form hook={registerForm}>

				<div className="row gutter-20 edge">

					<div className="col col-12">

						<FieldInput
							name='username'
							label={'Username:'}
						/>

					</div>

					<div className="col col-12">

						<FieldInput
							type='password'
							name='password'
							label={'Password:'}
						/>

					</div>

					<div className="col col-12">

						<FieldInput
							type='password'
							name='confirm_password'
							label={'Confirm Password:'}
						/>

					</div>

				</div>

				<Space v={20} />

				<input className='btn btn-primary btn-wide' type="submit" value="Create Account" />

			</Form>

			<div className="space v20"></div>

			<div className="text-center">Or</div>

			<div className="space v20"></div>

			<Link className='btn btn-primary' to={'/login'}>Login</Link>

		</div>
	)
}

export default RegisterForm