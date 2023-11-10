import React from 'react'

import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

function RequireMyAcount({children}) {
    const {user } = useAuth();
    if(!user){
        return <Navigate to='/'/>
    }

    return children;
 
}

export default RequireMyAcount