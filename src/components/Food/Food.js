import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Food.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useAuth } from '../Login/UseAuth';


const Food = (props) => {
    const {name, img, img2, foodDescription, price, _id} = props.food;
    const [quantity, setQuantity] = useState(1);
    const auth = useAuth();

    return (
        <div>
            <div className="container mb-5 single-food-card">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{name}</h1>
                        <p className="mb-4" style={{marginTop: '2rem'}}>{foodDescription}</p>
                        <div className="d-flex mb-4 align-items-center">
                            <h2>${(price*quantity).toFixed(2)}</h2>
                            <div className="item-count ms-5 btn">
                                <button onClick={() => setQuantity (quantity <=1 ? quantity : quantity - 1)} className="minus-btn">-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="plus-btn">+</button>
                            </div>
                        </div>
                        <div className="action d-flex align-items-center pb-4">
                            <button className="btn btn-style px-3">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ms-1">Add to cart</span>
                            </button>
                            {auth.user ? 
                                <Link  to={`/shipment/${_id}`}>
                                    <button className="btn btn-style px-3 ms-5">Proceed Checkout</button> 
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-style px-3 ms-5">Proceed Checkout</button> 
                                </Link>
                            }
                        </div>
                        <div className="more-images mt-5 mb-5">
                            <img src={img} className="active-single-img small-img" height="150px" alt="img"/>
                            <img src={img2} className="ms-md-5 active-single-img small-img" height="150px" alt="img2"/>
                            <span className="more-food-icon"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="large-food-img">
                            <img src={img} className="img-fluid" alt="food"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Food;