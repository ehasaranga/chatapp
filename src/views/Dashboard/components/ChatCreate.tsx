
import FieldText from '../../../components/Form/FieldText'
import useForm from '../../../hooks/useForm'

function ChatCreate() {

	const {formValues, handleChange, handleSubmit} = useForm({
		chatname: ''
	})

	const onSubmit = (data: any) => {

		console.log('create chat ', data)

	}

	return (
		<div className={''}>

			<form className='form' onSubmit={handleSubmit(onSubmit)}>

				<div className="row gutter-10 edge">

					<div className="col col-a">

						<FieldText
							name='chatname'
							onChange={handleChange}
							value={formValues.chatname}
							placeholder={'Chat Name'}
						/>

					</div>

					<div className='col'>

						<button className={'btn btn-primary btn-add'} type="submit">+</button>

					</div>

				</div>

			</form>

		</div>
	)
}

export default ChatCreate