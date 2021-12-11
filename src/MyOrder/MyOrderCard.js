import { Paper, Typography } from '@mui/material';
import React from 'react';

const MyOrderCard = ({ order, setCount }) => {
    const { img, name, price, _id } = order;

    const handleDelete = id => {
        fetch(`https://still-escarpment-97204.herokuapp.com/orders?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('successfully deleted')
                }
                setCount(prev => prev + 1)
            })
    }

    return (
        <Paper className='d-flex align-items-center justify-content-between m-2 p-2'>
            <img width='20%' src={img} alt="" />
            <div>
                <Typography>{name}</Typography>
                <Typography>${price}</Typography>
            </div>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </Paper>
    );
};

export default MyOrderCard;