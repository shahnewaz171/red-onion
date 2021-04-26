import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../demoData';
import Food from '../Food/Food';
import Navbar from '../Navbar/Navbar';
import './FoodDetails.css';

const FoodDetails = () => {
    const {foodKey} = useParams();
    const [foods, setFoods] = useState([]);
    const data = fakeData;
    
    useEffect(() => {
        const singleFood = data.find(fd => fd.key === foodKey);
        setFoods(singleFood);
    }, [foodKey, data])

   
    return (
        <div>
            <Navbar></Navbar>
            <Food food={foods}></Food>
        </div>
    );
};

export default FoodDetails;