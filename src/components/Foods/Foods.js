import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import fakeData from '../../demoData/index';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState("lunch");

    useEffect(() => {
        setFoods(fakeData);
    }, [])
    const handleAddFoods = () => {
        fetch('http://localhost:5000/addFoods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    // const selectedFoods = foods.filter(food => food.category === foodType).slice(0, 6);

    return (
        <div className="container mt-4 mb-5">
            <nav>
                <ul className="nav justify-content-center item-title">
                    <li onClick={() => setFoodType("breakfast")} className="nav-item">
                        <Link to="#" className={foodType === 'breakfast' ? "nav-link active m-0" : "nav-link m-0"}>
                            Breakfast
                        </Link>
                    </li>
                    <li onClick={() => setFoodType("lunch")} className="nav-item">
                        <Link to="#" className={foodType === 'lunch' ? "nav-link active m-0" : "nav-link m-0"}>
                            Lunch
                        </Link>
                    </li>
                    <li onClick={() => setFoodType("dinner")} className="nav-item">
                        <Link to="#" className={foodType === 'dinner' ? "nav-link active m-0" : "nav-link m-0"}>
                            Dinner
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="row my-5 pt-2">
                <button onClick={handleAddFoods}>Add Foods</button>
                {
                    // selectedFoods.map(food => <FoodItem food={food} key={food.key}></FoodItem>)
                }
            </div>

            <div className="text-center pb-4">
                <button disabled className="btn btn-secondary">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Foods;