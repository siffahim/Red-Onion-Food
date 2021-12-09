import { Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../../../Image/logo.png';

const Footer = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 1 }} sx={{ background: 'black', color: '#aaa6a6', p: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={6} md={6}>
                <img width='40%' src={logo} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <ul className='footer-li'>
                    <li>About Online food</li>
                    <li>Read our Blog</li>
                    <li>Sign up to deliver</li>
                    <li>Add your Resturant</li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <ul className='footer-li'>
                    <li>About Online food</li>
                    <li>Read our Blog</li>
                    <li>Sign up to deliver</li>
                    <li>Add your Resturant</li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={8} style={{ marginTop: '60px' }}>
                <Typography variant='body2'>Copyright &copy; online food</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ marginTop: '60px' }}>
                <ul className='d-flex justify-content-between'>
                    <li>Privacy Policy</li>
                    <li>Term of us</li>
                    <li>Pricing</li>
                </ul>
            </Grid>
        </Grid >
    );
};

export default Footer;