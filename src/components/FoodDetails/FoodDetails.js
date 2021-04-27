import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../demoData';
import Food from '../Food/Food';
import Navbar from '../Navbar/Navbar';
import './FoodDetails.css';

const FoodDetails = () => {
    const {foodKey} = useParams();
    const [food, setFood] = useState([]);
    const data = fakeData;
    
    useEffect(() => {
        const singleFood = data.find(fd => fd.key === foodKey);
        setFood(singleFood);
    }, [foodKey, data])

    return (
        <div>
            <Navbar food={food}></Navbar>
            <Food food={food}></Food>
        </div>
    );
};

export default FoodDetails;