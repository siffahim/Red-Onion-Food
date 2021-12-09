import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../Image/adult-blur-blurred-background-687824.png';
import img3 from '../../../Image/architecture-building-city-2047397.png';
import img2 from '../../../Image/chef-cook-food-33614.png';
import InfoCard from '../InfoCard/InfoCard';

const datas = [
    {
        id: 101,
        name: 'Fast Delevery',
        img: `${img1}`
    },
    {
        id: 102,
        name: 'A Good auto Responder',
        img: `${img2}`
    },
    {
        id: 103,
        name: 'Home Delevery',
        img: `${img3}`
    },
]

const Information = () => {
    return (
        <Container>
            <Typography variant='h5'>Why you Choose us</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci modi eum odit quam illo.</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    datas.map(data => <InfoCard
                        key={data.id}
                        data={data}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Information;