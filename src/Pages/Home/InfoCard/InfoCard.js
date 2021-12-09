import { Grid, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ data }) => {
    const { name, img } = data;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img width='100%' src={img} alt="" />
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem? Modi temporibus ullam dolore.</Typography>
            <a href="#d">See More</a>
        </Grid>
    );
};

export default InfoCard;