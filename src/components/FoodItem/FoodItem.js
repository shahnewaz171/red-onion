import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';


const FoodItem = (props) => {
    const {name, title, price, img} = props.food;
    console.log(name);
    return (
        <div className="col-md-4 mb-4">
            <Link to="#" className="food-link">
                <div className="card text-center">
                    <div className="card-img">
                        <img src={img} className="img-fluid card-img-top" alt="b1"></img>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-text">{title}</p>
                         <span>${price}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;