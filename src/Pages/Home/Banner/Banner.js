import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <Box className='banner-container'>
            <div>
                <Typography variant='h4' sx={{ mb: '15px' }}>Best food waiting for your belly</Typography>
                <input type="text" placeholder='Search food items' />
                <button className='btn'>Search</button>
            </div>
        </Box>
    );
};

export default Banner;