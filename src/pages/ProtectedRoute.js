import { Navigate,Outlet } from 'react-router-dom';

const ProtectedRoute = ()=>{
    const isloggedIn=localStorage.getItem("loggedIn");
    return(
        isloggedIn?<Outlet />: <Navigate to="/" replace />
    )
};
export default ProtectedRoute;
