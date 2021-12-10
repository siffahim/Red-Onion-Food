import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Image/logo2.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { registerUser } = useAuth();

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('Give same password');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name)

    }
    return (
        <Grid container spacing={2} className='login-container'>
            <Grid item xs={12} md={6}>
                <img width='180px' sx={{ m: 1 }} src={logo} alt="" />
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Name"
                        type="text"
                        onBlur={handleChange}
                        name='name'
                    />
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
                        name='password'
                    />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        label="Confirm Password"
                        type="password"
                        onBlur={handleChange}
                        name="password2"
                    />
                    <button style={{ width: '50%', margin: 15 }}>Sign In</button>
                    <Typography variant='body2'><Link to='/login'>Alrady have an account</Link></Typography>
                </form>
            </Grid>
        </Grid>
    );
};

export default Register;