import React from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css';

const Foods = () => {
    return (
        <div className="container mt-4 mb-5">
            <nav>
                <ul className="nav justify-content-center item-title">
                    <li className="nav-item">
                        <Link to="#" className="nav-link active">
                            Breakfast
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link active">
                            Lunch
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link active">
                            Dinner
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="row my-5 pt-2">
                <FoodItem></FoodItem>
            </div>

            <div className="text-center">
                <button disabled className="btn btn-secondary">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Foods;