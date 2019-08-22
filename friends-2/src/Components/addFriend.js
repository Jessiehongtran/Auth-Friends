import React, {useState} from 'react';


const AddFriend = (props) => {
    console.log('props in AddFriend', props)
    const [newFriend, setNewFriend] = useState(props.initialValue || {name: '', age: '', email: ''})

    const handleChange = event => {
        setNewFriend({
            ...newFriend, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault() ;
        props.submitFriend(newFriend)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name" 
                placeholder="name" 
                value={newFriend.name} 
                onChange={handleChange}
                />

                <input 
                type="text" 
                name="age" 
                placeholder="age" 
                value={newFriend.age} 
                onChange={handleChange}
                />

                <input 
                type="text" 
                name="email" 
                placeholder="email" 
                value={newFriend.email} 
                onChange={handleChange}
                />

                <button type="submit">{props.button}</button>
            </form>
        </div>
    )
}

export default AddFriend;