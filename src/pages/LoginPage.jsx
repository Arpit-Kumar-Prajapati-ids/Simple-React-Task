import React from 'react';
import "./login.css";
import Login from '../components/Login';
const LoginPage = () => {
    return(
        <div className="loginpagecontainer" style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Login />
        </div>
    )
}

export default LoginPage;