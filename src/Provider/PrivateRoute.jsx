import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    // const location = useLocation();
    // console.log(location);

    const {user , loading} = use(AuthContext);

    if(loading)
    {
        return <div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>
    }

    if(user && user?.email)
    {
        return children;
    }
    else
    {
        return <Navigate state={loading.pathname} to={`/auth/login`}></Navigate>;
    }

};

export default PrivateRoute;