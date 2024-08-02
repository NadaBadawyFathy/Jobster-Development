import './Register.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Base } from '../Api';

export default function Register() {
    // replace window.location.pathname And Don't Refresh Page
    const Navigate = useNavigate();

    const [formData ,setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        const {name ,value} = e.target; // e.target.name or e.target.value

        setFormData({
            ...formData, 
            [name]:value 
                
        });

        // console.log(formData)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post(`${Base}/users/signup`,formData).then((res)=> {
            console.log(res);
            if (res.data.message === 'success') {
                Navigate('/login')
            }
        }
        ).catch((err)=> console.log(err));

        // console.log(`${Base}/users/signup`)
    };

    return (
        <div className="register-page">
            <div className="card">
                <div className="card-header">
                    <div className="logo">J</div>
                </div>
                <div className="card-body">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" 
                        required
                        value={formData.name}
                        name='name'
                        id='name'
                        onChange={handleChange}
                        />
                        <input type="email" placeholder="Email" 
                        required
                        value={formData.email}
                        name='email'
                        id='email'
                        onChange={handleChange}
                        />
                        <input type="password" placeholder="Password" 
                        required
                        value={formData.password}
                        name='password'
                        id='password'
                        onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="card-footer">
                    <p>Already a member? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
}
