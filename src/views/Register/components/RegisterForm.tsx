
import { Link } from 'react-router-dom';
import FieldText from '../../../components/Form/FieldText';
import Space from '../../../components/Space/Space';
import useForm from '../../../hooks/useForm';

function RegisterForm() {

	const {formValues, handleChange, handleSubmit} = useForm({
		username: '',
		password: '',
		confirm_password: '',
	});

	const onSubmit = (data: any) => {

		console.log(data)

	}

	return (
		<div className="login-box">

			<h1>Hi, there!</h1>

			<p>Create an account to start chatting</p>

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

					<div className="col col-12">

						<FieldText
							type='password'
							name='confirm_password'
							value={formValues.confirm_password}
							label={'Confirm Password:'}
							onChange={handleChange}
						/>

					</div>

				</div>

				<Space v={20} />

				<input className='btn btn-primary btn-wide' type="submit" value="Create Account" />

			</form>

			<div className="space v20"></div>

			<div className="text-center">Or</div>

			<div className="space v20"></div>

			<Link className='btn btn-primary' to={'/login'}>Login</Link>

		</div>
	)
}

export default RegisterForm