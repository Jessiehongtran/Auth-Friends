import React from 'react';
import {Link} from 'react-router-dom'

const FriendCard = props => {
    console.log('friendCard', props)
    return (
        <div>
            <p>{props.friend.name} {props.friend.age} {props.friend.email}</p> 
            <button onClick ={()=> props.toDelete(props.friend.id)}>Delete</button>
            <Link to={`/friends/edit/${props.friend.id}`}>Edit</Link>
        </div>
    )
}

export default FriendCard;