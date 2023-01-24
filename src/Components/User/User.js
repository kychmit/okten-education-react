import {useEffect, useState} from "react";
import {getUser} from "../../api/getUsers";

const User = ({userId},onRemoveUser) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        if (userId) {
            getUser(userId).then(resp => setUser(resp))
        }
    }, [userId])
    console.log(user);
    if (!user) return null

    return (
        <div>
            <div> name:{user.name} </div>
            <div> username:{user.username} </div>
            <button onClick={() => onRemoveUser(null)}> Clean up user details</button>
        </div>
    );
};

export {User};