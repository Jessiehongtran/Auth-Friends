import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class Friendlist extends React.Component {
    state = {
        friendList: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => 
            // console.log('res in getData', res)
            this.setState({
                friendList: res.data
            })
            )
        .catch(err => console.log(err.response))
    }
    render(){
        console.log('friendList', this.state.friendList)
        return (
            <div>
                {this.state.friendList.map(friend => (
                    <div>
                        <h3>Name: {friend.name}</h3>
                        <p>Email: {friend.email}</p>
                        <p>Age: {friend.age}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Friendlist;