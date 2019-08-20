import React from 'react';
import axios from 'axios'


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        console.log('e', e)
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => 
                console.log(res))
            .catch(err => console.log(err.response))
    }


    render(){
        console.log('credentials', this.state.credentials)
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    type="text" 
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username} 
                    onChange={this.handleChange}
                     />
                    
                    <input 
                    type="text" 
                    placeholder="password" 
                    name="password"
                    value={this.state.credentials.password} 
                    onChange={this.handleChange}
                     />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;