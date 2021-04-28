import React, { useState } from 'react';


const ShipmentFood = (props) => {
    const {name, price, img, quantity} = props.cartInfo;
    const [updateQuantity, setUpdateQuantity] = useState(quantity);
   
    console.log(updateQuantity);

    return (
        <div className="single-checkout-item mb-3 bg-light rounded d-flex align-items-center p-3">
            <img src={img} width="100px" alt="img"/>
            <div className="ms-2" style={{width: '300px'}}>
                <h6>{name}</h6>
                <h4>$ <span className="text-danger">{(price*updateQuantity).toFixed(2)}</span></h4>
                <p style={{color: "#a5a3a3"}}>Delivery free</p>
            </div>
            <div className="checkout-item-button btn">
                <button onClick={() => setUpdateQuantity(updateQuantity <=1 ? updateQuantity : updateQuantity - 1)} className="btn font-weight-bolder" >-</button>
                <button className="btn bg-white rounded" >{updateQuantity}</button>
                <button onClick={() => setUpdateQuantity(updateQuantity + 1)} className="btn font-weight-bolder" >+</button>
            </div>
        </div>
    );
};

export default ShipmentFood;