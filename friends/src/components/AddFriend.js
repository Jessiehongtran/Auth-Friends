import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
    state= {
        newFriend : {
            
            name: '',
            age: '',
            email: '',
            
        }
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.prevenDefault();
        axios
        .post('http://localhost:5000/api/friends', this.state.newFriend)
        .then(res=> console.log('newfiend', res))
        .catch(err => console.log(err.response))
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                type="text"
                placeholder="name"
                name="name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
                />

                <input 
                type="text"
                placeholder="age"
                name="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
                />

                <input 
                type="text"
                placeholder="email"
                name="email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default AddFriend;