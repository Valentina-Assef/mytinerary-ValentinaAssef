import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, path}) => {
    let user = useSelector(store => store.userReducer.user)

    if(user) return <Navigate to={path}/>

    return children
}