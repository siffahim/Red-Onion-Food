import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FoodDetailCard from './FoodDetailCard';

const FoodDetail = () => {
    const { foodId } = useParams()
    const [food, setFood] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <Container>
            <FoodDetailCard
                food={food}
            />
        </Container>
    );
};

export default FoodDetail;