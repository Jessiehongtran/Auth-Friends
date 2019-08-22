import React, {useState} from 'react';
import axios from 'axios'


const Login = (props) => {
    console.log('props in Login', props)
    const [user, setUser] = useState({username: "", password: ""})

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('user',user)
        axios
        .post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.payload)
            console.log(props)
            props.history.push('/friends')
        })
        .catch(error => { if (!error.response) {
            console.log("Please check your internet connection.");
        }

        return Promise.reject(error)
    })


    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="username" 
            placeholder="username" 
            value={user.username} 
            onChange={handleChange}
            />

            <input 
            type="text" 
            name="password" 
            placeholder="password" 
            value={user.password} 
            onChange={handleChange}
            />

            <button type="submit">Log In</button>

        </form>
    )
}

export default Login;
