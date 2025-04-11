import React,{ useState, useEffect} from "react";
import Greeting from "./Greeting";

function UserProfile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('api/user')
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, []);

    if (!user) return <div>Loading...</div>;
    return <Greeting name={user.name}/>;

}

export default UserProfile;