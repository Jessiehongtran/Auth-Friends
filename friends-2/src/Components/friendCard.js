import React from 'react';

const FriendCard = props => {
    console.log('friendCard', props)
    return (
        <div>
            <p>{props.friend.name} {props.friend.age} {props.friend.email}</p> 
            <button onClick ={()=> props.toDelete(props.friend.id)}>Delete</button>
        </div>
    )
}

export default FriendCard;