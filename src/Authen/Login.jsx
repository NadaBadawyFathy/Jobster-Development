import React , { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Base } from '../Api';


export default function Login(props) {
    // replace window.location.pathname And Don't Refresh Page
    const Navigate = useNavigate();

    const [formData ,setFormData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        const {name ,value} = e.target; // e.target.name or e.target.value

        setFormData({
            ...formData, // دي لازم تتعمل عشان ميحذفش اي اسم عندي ويضيف كل مره بس الحاجه الي بضيفها لا لازم كلهم يكونوا موجودين
            [name]:value 
            
        });

        // console.log(formData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        e.preventDefault()
        axios.post(`${Base}/users/signin`,formData).then((res)=> {
            console.log(res);
            if (res.data.message === 'login') {
                localStorage.setItem('userToken',res.data.token);

                props.getUser();
                Navigate('/landing');
            }
        }
        ).catch((err)=> console.log(err));

        // console.log(`${Base}/users/signin`)
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo">J</div>
                <h2>Jobster</h2>
                <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" 
                    required
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <p>
                Not a member yet? <Link to='/register'>Register</Link>
            </p>
            </div>
        </div>
    );
}
