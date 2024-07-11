import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login(){
    const {isLoggedIn, login} = useAuth();

    if (isLoggedIn)
        return <Navigate to={"/"}/>

    return (
        <LoginForm/>
    );
}