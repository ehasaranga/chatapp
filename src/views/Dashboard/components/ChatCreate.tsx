
import { useAppDispatch } from '@/state/hooks'
import { createChat } from '@/state/chatSlice'
import FieldInput from '@/components/Form/FieldInput'
import { Form, useForm } from 'react-ezform';

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