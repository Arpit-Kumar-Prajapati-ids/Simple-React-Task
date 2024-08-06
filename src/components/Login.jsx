import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleUsername = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        fetch(`https://dummyjson.com/user/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                username:userName,
                password:password
            })
        })
        .then(res => {
            if(res.status == 400){
                return Promise.reject();
            }
            sessionStorage.setItem("isLogged",true);
            return res.json();
        })
        .then(result => {navigate(`/dashboard/${result.id}`)})
        .catch(err => alert("User does not exists"));
    }

return(
    <div className="logincontainer">
        <div className="heading">
            <p>Login</p>
        </div>
        <div className="inputs">
            <input type='text' placeholder='Enter your name' onChange={handleUsername}/><br/><br/>
            <input type='password' placeholder="Enter your password" onChange={handlePassword}/><br/><br/>
        </div>
        <div className="btn">
            <button onClick={handleSubmit}>Login</button>
        </div>
    </div>
)
}

export default Login;