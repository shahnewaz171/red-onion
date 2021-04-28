import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ShipmentFood = (props) => {
    const {name, price, img, quantity, key} = props.cartInfo;

    return (
        <div className="d-flex single-checkout-item bg-light rounded">
            <div className="mb-3  d-flex align-items-center p-3" style={{width: '80%'}}>
                <img src={img} width="100px" alt="img"/>
                <div className="ms-2" style={{width: '300px'}}>
                    <h6>{name}</h6>
                    <h4>$ <span className="text-danger">{(price*quantity).toFixed(2)}</span></h4>
                    <p style={{color: "#a5a3a3"}}>Delivery free</p>
                </div>
               
            </div>
            <div className="checkout-item-button btn">
                <button onClick={() => props.removeProduct(key)} className="btn font-weight-bolder orderBtn">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
};

export default ShipmentFood;