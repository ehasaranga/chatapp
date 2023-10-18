import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import ChatCreate from "./ChatCreate";
import ChatList from "./ChatList";

import './Sidebar.scoped.scss';

const Sidebar: React.FC = () => {

    const navigate = useNavigate();

    const logOut = () => {

        navigate('/login');

    }

    return (
        <div className={`sidebar-wrap`}>

            <div className={`sidebar`}>

                <div className="section">

                    <ChatCreate />

                </div>

                <div className="section chat-list-wrap flex-1">

                    <ChatList />

                </div>

                <div className="section">

                    <Button
                        label='Logout'
                        type='secondary'
                        className='text-left ml-auto'
                        onClick={() => logOut()}
                    />

                </div>

            </div>

        </div>
    )

}

export default Sidebar