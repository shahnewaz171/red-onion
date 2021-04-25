import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';
import b1 from '../../images/Breakfast/bagel-and-cream-cheese.png';

const FoodItem = () => {
    return (
        <div className="col-md-4 mb-4">
            <Link to="#" className="food-link">
                <div className="card text-center">
                    <div className="card-img">
                        <img src={b1} class="img-fluid card-img-top" alt="b1"></img>
                    </div>
                    <div class="card-body">
                        <p class="card-title">Healthy Meal Plan</p>
                        <p class="card-text">How we dream about our future</p>
                         <span>$25.99</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;