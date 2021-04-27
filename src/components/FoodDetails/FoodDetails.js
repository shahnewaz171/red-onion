import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../demoData';
import Food from '../Food/Food';
import './FoodDetails.css';

const FoodDetails = (props) => {
    const {foodKey} = useParams();
    const [singleFood, setSingleFood] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/singleFood/"+ foodKey)
        .then(res => res.json())
        .then(data => {
            setSingleFood(data);
        })
    }, [foodKey])
    console.log(singleFood);
    return (
        <div>
            <Food food={singleFood} handleFoodCart={props.handleFoodCart} ></Food>
        </div>
    );
};

export default FoodDetails;