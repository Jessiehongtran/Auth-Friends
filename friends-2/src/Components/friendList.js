import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import AddFriend from './addFriend'
import FriendCard from './friendCard'
import {Route} from 'react-router-dom'

const FriendList = () => {
    const [friends, setFriends]= useState([])

    useEffect(()=> {
        Axios
        .get('http://localhost:5000/api/friends', {
            headers: {
                Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log('friends data', res)
            setFriends(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])

    const toAdd = friend => {
        Axios
        .post('http://localhost:5000/api/friends', friend, {
            headers: {
                Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err.response))
    }

    const toDelete = id => {
        console.log('id:', id)
        Axios
        // .get(`http://localhost:5000/api/friends/`, {
        //     headers: {
        //         Authorization: localStorage.getItem('token')}
        // })
        // .then(res => {
        //     console.log('friendList', res.data)
        //     console.log('here', res.data.filter(filteredFriend => filteredFriend.id!==id))
        //     setFriends(res.data.filter(filteredFriend => filteredFriend.id!==id))
            
        // })
        .delete(`http://localhost:5000/api/friends/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log('certain friend', res.data)
            setFriends(res.data)

            
        })
        .catch(err=> console.log(err.response))
    }

    const toEdit = friend => {
        Axios
        .put(`http://localhost:5000/api/friends/${friend.id}`, friend, {
            headers: {
                Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err.response))

    }

    const Add = 'Add'

    const Edit= 'Edit'
    
    

    return (
        <div>
            <h2>Friends</h2>
            
            {friends.map( friend => 
            <FriendCard key={friend.id} friend={friend} toDelete={toDelete}/>
            )}

            <Route exact path="/friends/" render= {props => <AddFriend {...props} submitFriend = {toAdd} button={Add}/>} /> 

            <Route path= "/friends/edit/:id" render={props => {
            console.log('params', props)
            const currentFriend = friends.find(friend => friend.id == props.match.params.id)
            return <AddFriend {...props} submitFriend = {toEdit} initialValue={currentFriend} button={Edit}/> 
        
            }
            }
            />
        </div>
    )
}

export default FriendList;
