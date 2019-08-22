import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const FriendList = () => {
    const [friends, setFriends]= useState([])

    useEffect(()=> {
        Axios
        .get('http://localhost:5000/api/friends', {
            headers: {
                Authorization: localStorage.getItem("token")}
        })
        .then(res => {
            console.log('friends data', res)
        })
        .catch(err => console.log(err.response))
    }, [])

    

    return (
        <div>
            <h2>Friends</h2>
        </div>
    )
}

export default FriendList;