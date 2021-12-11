import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import logo from '../Image/logo2.png';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function run() {
            const res = await fetch(`https://still-escarpment-97204.herokuapp.com/orders?email=${user.email}`)
            const data = await res.json()

            setOrders(data)
        }
        run()
    }, [count])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container className='text-center'>
            <img width='180px' className='mb-5' src={logo} alt="" />
            <Grid container spacing={{ md: 5 }}>
                <Grid item xs={12} md={6}>
                    {
                        orders.map(order => <MyOrderCard
                            order={order}
                            setCount={setCount}
                        />)
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto'>

                        <input type='text' className='form-control mb-2' defaultValue={user.displayName} />
                        <input type='email' className='form-control mb-2' defaultValue={user.email} />

                        {/*  <input type='text' className='form-control mb-2' placeholder='Where to' {...register("startPick", { required: true })} /> */}

                        <input type='text' className='form-control mb-2' placeholder='Where to' {...register("startPick", { required: true })} />
                        {errors.startPick && <span>This field is required</span>}

                        <input type='text' className='form-control mb-2' placeholder='Destination' {...register("destination", { required: true })} />
                        {errors.destination && <span>This field is required</span>}

                        <input type="submit" className='form-control mb-2' value='Place Order' />
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyOrder;