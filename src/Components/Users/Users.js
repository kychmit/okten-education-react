import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services";

const Users = () => {

    const [users, setUsers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [count,setCount] = useState(0);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
       userService.getAll().then(value => value.data).then(value => setUsers([...value]))
                          }, [count])

    return (
        <div>

            <h1>UserDetails:</h1>

            {userDetails && <User user={userDetails}/>}
            {/*або {userDetails && <div>{userDetails.id}--{userDetails.name}</div>}*/}

            <hr/>

            <h1>Users:</h1>
            {/*<button onClick={()=>setCount(prevState => prevState+1)}>click</button>*/}
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}

        </div>
    );
};

export {Users};