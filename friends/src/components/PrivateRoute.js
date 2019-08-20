import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, ...rest}) => {
    // console.log('props in PrivateRoute', props)
    // const component = props.component
    // const rest = {
    //     exact: props.exact,
    //     path:props.path,
    //     render: props.render
    
    return (
        <Route
        {...rest}
        render = {props => {
            if (localStorage.getItem("token")) {
                return <Component {...props}/>
            }
            return <Redirect to="/login" />
        }}

        />
    )
}

export default PrivateRoute;