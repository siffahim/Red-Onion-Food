import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({ foods }) => {
    const { _id, name, pic, price } = foods;
    const navigate = useNavigate();

    const handleClick = id => {
        navigate(`/food/${id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ heigit: '300px', boxShadow: 0 }} onClick={() => handleClick(_id)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ height: '50%', width: '50%', m: 'auto' }}
                        image={pic}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ranging across except Antarctica
                        </Typography>
                        <Typography variant='h6'>
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Food;