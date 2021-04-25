import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import fakeData from '../../demoData/index';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [foodType, setFoodType] = useState("breakfast");

    useEffect(() => {
        setFoods(fakeData);
    }, [])

    const selectedFoods = foods.filter(food => food.category === foodType).slice(0, 6);

    return (
        <div className="container mt-4 mb-5">
            <nav>
                <ul className="nav justify-content-center item-title">
                    <li onClick={() => setFoodType("breakfast")} className="nav-item">
                        <Link to="#" className={foodType === 'breakfast' ? "nav-link active" : "nav-link"}>
                            Breakfast
                        </Link>
                    </li>
                    <li onClick={() => setFoodType("lunch")} className="nav-item">
                        <Link to="#" className={foodType === 'lunch' ? "nav-link active" : "nav-link"}>
                            Lunch
                        </Link>
                    </li>
                    <li onClick={() => setFoodType("dinner")} className="nav-item">
                        <Link to="#" className={foodType === 'dinner' ? "nav-link active" : "nav-link"}>
                            Dinner
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="row my-5 pt-2">
                {
                    selectedFoods.map(food => <FoodItem food={food} key={food.key}></FoodItem>)
                }
            </div>

            <div className="text-center">
                <button disabled className="btn btn-secondary">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Foods;