import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const FoodDetailCard = ({ food }) => {
    const { catagory, name, pic, price } = food;
    const [count, setCount] = useState(1);
    const { user } = useAuth();

    //string cutting..............>
    const str1 = catagory?.charAt(0).toUpperCase();
    const str2 = catagory?.slice(1);

    //data-------------
    const order = {
        name,
        email: user.email,
        price,
        img: pic,
    }

    //save info on DB
    const handleSendToDB = () => {
        fetch('https://still-escarpment-97204.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added Product')
                }
            })
    }

    return (
        <Grid container className='d-flex align-items-center justify-content-between p-md-5'>
            <Grid item sx={12} md={5}>
                <Typography variant='h4'>Light {`${str1}${str2}`}</Typography>
                <Typography variant='h6'>{name}</Typography>
                <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias accusamus neque ex explicabo consequuntur. Quidem repellendus itaque quas ea eum!</Typography>
                <div className='d-flex align-items-center mt-3'>
                    <Typography variant='h5'>${price * count}</Typography>
                    <div className='counter'>
                        <button onClick={() => setCount(count - 1)}>-</button>
                        <Typography variant='h6'>{count}</Typography>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>
                <button className='btn mt-3' onClick={handleSendToDB}>Add</button>
            </Grid>
            <Grid item sx={12} md={6}>
                <img width='80%' src={pic} alt="" />
            </Grid>
        </Grid>
    );
};

export default FoodDetailCard;