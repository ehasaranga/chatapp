import { useContext } from "react"
import Button from "../../../components/Button/Button"
import { ChatContext } from "../../../store/ChatContext"

const ChatList:React.FC = () => {

	const { chatList } = useContext(ChatContext);

	const onClick = (id: any) => {

		console.log('chat cliked', id)

	}
	
	return (

		<div className="chat-list">

			<div className="grid grid-1 gutter-10">

				{chatList && chatList.map(item => (
					<div className="item" key={item.id}>

						<Button 
								label={item.name} 
								type="primary" 
								size="wide" 
								className={"text-left"} 
								onClick={() => onClick(item.name)}
							/>

					</div>
				))}

			</div>

		</div>

	)
}

export default ChatList