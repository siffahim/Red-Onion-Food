import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import facebook from '../../../Image/facebook.png';
import google from '../../../Image/google.png';
import logo from '../../../Image/logo2.png';

const Login = () => {

    const { loginUser, error, signInGoogle, signInFacebook } = useAuth()
    const [loginData, setLoginData] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password)
    }
    return (
        <Grid container spacing={2} className='login-container'>
            <Grid item xs={12} md={6}>
                <img width='180px' sx={{ m: 1 }} src={logo} alt="" />
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Email"
                        type="email"
                        onBlur={handleChange}
                        name='email'
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Password"
                        type="password"
                        onBlur={handleChange}
                        name='password1'
                    />
                    <p sx={{ color: 'red' }}>{error}</p>
                    <button style={{ width: '50%', margin: 15 }}>Sign In</button>
                    <Typography variant='body2'><Link to='/register'>Create new account</Link></Typography>
                </form>
                <div className='d-flex justify-content-center'>
                    <div className='icon' onClick={signInGoogle}>
                        <img src={google} alt="" />
                    </div>
                    <div className='icon' onClick={signInFacebook}>
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Login;