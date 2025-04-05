import React, { useContext, useId, useState } from 'react'
import userContext from '../context/userContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(userContext);
    // const id = useId();
    function handleSubmit(e) {
        // prevent page from refreshing
        
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <div>

            <form>
                <label htmlFor='uname' >
                    username:
                </label>

                <input type='text' id='uname' placeholder='type your username'
                    value={username}
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                />

                <hr />

                <label htmlFor='password' >
                    password:
                </label>

                <input type='password' id='password' placeholder='type your password'
                    value={password}
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <hr />
                <button
                    onClick={handleSubmit}
                >
                    submit
                </button>

            </form>

        </div>
    )
}

export default Login
