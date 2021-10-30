import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoding} = useAuth()

   if (isLoding) {
        return <div className='text-center'>
            <div className="spinner-grow spinner-grow-sm mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Route {...rest} render={({ location }) => user
         ? 
         children : 
         <Redirect to={{ pathname: '/login', state: { from: location } }}>
         </Redirect>} />
    );

};

export default PrivateRoute;