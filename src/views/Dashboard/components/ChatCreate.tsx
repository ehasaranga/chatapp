
import { useContext } from 'react'
import FieldText from '../../../components/Form/FieldText'
import useForm from '../../../hooks/useForm'
import { ChatContext } from '../../../store/ChatContext'

function ChatCreate() {

	const { chatD } = useContext(ChatContext)

	const {formValues, handleChange, handleSubmit} = useForm({
		name: ''
	})

	const onSubmit = (data: typeof formValues) => {

		if (data.name.trim() === '') return;

		chatD({ type: 'CREATE', payload: { name: data.name } });

		console.log('create chat ', data)

	}

	return (
		<div className={''}>

			<form className='form' onSubmit={handleSubmit(onSubmit)}>

				<div className="row gutter-10 edge">

					<div className="col col-a">

						<FieldText
							name='name'
							onChange={handleChange}
							value={formValues.name}
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