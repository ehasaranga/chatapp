
import { useAppDispatch } from '@/state/hooks'
import FieldText from '../../../components/Form/FieldText'
import useForm from '../../../hooks/useForm'
import { createChat } from '@/state/chatSlice'

function ChatCreate() {

	const dispatch = useAppDispatch()

	const {formValues, handleChange, handleSubmit, reset} = useForm({
		name: ''
	})

	const onSubmit = (data: typeof formValues) => {

		if (data.name.trim() === '') return;

		dispatch(createChat({ id: 0, name: data.name }))

		console.log('create chat ', data)

		reset();

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