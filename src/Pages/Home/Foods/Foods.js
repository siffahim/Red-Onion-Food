import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cata, setCata] = useState('breakfast');
    useEffect(() => {
        const run = async () => {
            const res = await fetch('https://still-escarpment-97204.herokuapp.com/foods')
            const data = await res.json()
            setFoods(data)
        }
        run()
    }, [cata])

    const remaing = foods.filter(food => food.catagory === cata);

    return (
        <Container sx={{ textAlign: 'center', p: '2rem' }}>
            <div style={{ marginBottom: '50px' }}>
                <button className='btn-filter' onClick={() => setCata('breakfast')}>Breakfast</button>
                <button className='btn-filter' onClick={() => setCata('lunch')}>Lunch</button>
                <button className='btn-filter' onClick={() => setCata('dinner')}>Dinner</button>
            </div>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    remaing?.map(food => <Food
                        key={food._id}
                        foods={food}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Foods;