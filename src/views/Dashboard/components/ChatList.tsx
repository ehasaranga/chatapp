import { useAppDispatch, useAppSelector } from "@/state/hooks";
import Button from "../../../components/Button/Button"
import { RootState } from "@/state/store";
import { updateInViewChat } from "@/state/chatSlice";

const ChatList:React.FC = () => {

	const { chats, inView } = useAppSelector((state: RootState) => state.chats)

	const dispatch = useAppDispatch();

	const onClick = (id: number) => {

		if (id === undefined) return;

		dispatch(updateInViewChat(id))

	}
	
	return (

		<div className="chat-list">

			<div className="grid grid-1 gutter-10">

				{chats && chats.map((item, key) => (
					<div className="item" key={key}>

						<Button 
								label={item.name} 
								type="primary" 
								size="wide" 
								className={`text-left ${inView == key ? 'btn-active' : ''}`} 
								onClick={() => onClick(key)}
							/>

					</div>
				))}

			</div>

		</div>

	)
}

export default ChatList