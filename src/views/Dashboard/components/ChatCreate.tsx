
import { useAppDispatch } from '@/state/hooks'
import FieldText from '../../../components/Form/FieldText'
import { useForm } from '../../../hooks/useForm'
import { createChat } from '@/state/chatSlice'
import { Form } from '@/components/Form/Form'
import FieldInput from '@/components/Form/FieldInput'

function ChatCreate() {

	const dispatch = useAppDispatch()

	const chatCreateForm = useForm({
		initVal: {
			name: ""
		},
		onSubmit: (val, ctx) => {

			if (val.name.trim() === '') return;

			dispatch(createChat({ id: 0, name: val.name }))

			console.log('create chat ', val)

			ctx.reset();

		}
	});

	return (
		<div className={''}>

			<Form hook={chatCreateForm}>
				{/* <form className='form' onSubmit={handleSubmit(onSubmit)}> */}

				<div className="row gutter-10 edge">

					<div className="col col-a">

						<FieldInput
							name='name'
							placeholder={'Chat Name'}
						/>

					</div>

					<div className='col'>

						<button className={'btn btn-primary btn-add'} type="submit">+</button>

					</div>

				</div>

			</Form>

		</div>
	)
}

export default ChatCreate