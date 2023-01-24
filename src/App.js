import './App.css'
import {Users} from "./Components/Users/Users";
import {User} from "./Components/User/User";
import {getUsers} from "./api/getUsers";
import {useEffect, useState} from "react";

const App = () => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {

        getUsers().then(resp => setUsers(resp))
    }, []);

    return (
        <div className="App">

            <div className="info-block">
                {!!users.length && <Users users={users} onSelectUser={setUserId}/>}
            </div>

            <div className="divider"/>

            <div className="info-block">

                {!! userId && <User onRemoveSetUser={setUserId} userId={userId}/>}
            </div>

        </div>
    );
};

export {App};
