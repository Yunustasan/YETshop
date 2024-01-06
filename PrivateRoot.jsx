import { Navigate } from "react-router-dom";

export default function PrivateRoot({user,children}){
    if(!user?.id){
        return <Navigate to="/login" replace/>
    }
    return children
}