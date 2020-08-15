import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute ({ component: Component, ...props }){
    return (
        <Route
            {...props}
            render={() => {
                if(localStorage.getItem('authToken')){
                    return <Component />
                }
                return <Redirect to='/login' />
            }}>

        </Route>
    )
}