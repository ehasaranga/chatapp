import Button from "../../../components/Button/Button"

const ChatList:React.FC = () => {

	const onClick = (id: any) => {

		console.log('chat cliked', id)

	}


	return (

		<div className="chat-list">

			<div className="grid grid-1 gutter-10">

				<div className="item">

					<Button 
						label="Chat 1" 
						type="primary" 
						size="wide" 
						className={"text-left"} 
						onClick={() => onClick('name')}
					/>

				</div>

				<div className="item">

					<Button 
						label="Chat 1" 
						type="primary" 
						size="wide" 
						className={"text-left"} 
						onClick={() => onClick('name3')}
					/>

				</div>

			</div>

		</div>

	)
}

export default ChatList