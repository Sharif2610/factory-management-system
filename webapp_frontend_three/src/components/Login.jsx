import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handledata = (e) => {
        e.preventDefault(); 

        axios.post('http://127.0.0.1:8000/factory/login/', { username, password })
        .then((resp) => {
            if (resp.data.message === 'Login Successfull!') {
                localStorage.setItem('login', 'true');
                alert(resp.data.message);
                navigate('/'); // go to Home
            }
        })
        .catch((error) => {
            alert('Invalid username or password');
            console.log(error);
        });
    };

    return (
        <form onSubmit={handledata}>
            <input 
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
            /><br/><br/>
            <input 
                type="password" 
                placeholder="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
            /><br/><br/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;