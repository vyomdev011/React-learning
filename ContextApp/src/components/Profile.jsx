import React, { useContext } from 'react'
import userContext from '../context/userContext'
function Profile() {
    const {user} = useContext(userContext)
    console.log("datatype of user is:",typeof user);
    console.log("user is :",user);
    if(!user) return <h2>not logged in</h2>
    return (
        <div>
            Profile : { user.username }
            <h1>
                more components
            </h1>
        </div>
    )
}

export default Profile;

