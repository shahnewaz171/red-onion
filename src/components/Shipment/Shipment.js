import React, { useEffect, useState } from 'react';
import {useForm } from 'react-hook-form';
import './Shipment.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ShipmentFood from '../ShipmentFood/ShipmentFood';

const Shipment = (props) => {
    const {foodKey} = useParams();
    const [singleFood, setSingleFood] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderData, setOrderData] = useState(null);
    const cartInfo = props.cart;
    const singleCart = props.cart[0];

    useEffect(() => {
        fetch("http://localhost:5000/singleFood/"+ foodKey)
        .then(res => res.json())
        .then(data => {
            setSingleFood(data);
        })
    }, [foodKey])

    const onSubmit = data => {
        setOrderData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {food: cartInfo, order: orderData, orderTime: new Date(), paymentId};
        console.log(orderDetails);
        setOrderSuccess(true);
    }
    const cart = props.cart;

    let total = 0;
    let food;
    for (let i = 0; i < cart.length; i++) {
        food = cart[i];
        total = total + food.price * food.quantity;
    }
    
    const tax = total /10;

    //Delivery Cost
    let delivery = 0;
    if(total > 200){
        delivery = 0.5;
    }
    else if(total > 100){
        delivery = 1;
    }
    else if(total > 50){
        delivery = 1.5;
    }
    else if(total > 0){
        delivery = 2;
    }

    //total price
    const grandTotal = (total + tax + delivery).toFixed(2);


    return (
        <div>
            <div className="shipment container my-5">
                <div className="row">
                    <div className="col-md-5 mb-5" style={{display: orderData ? 'none': 'block'}}>
                        <h4 className="pt-0">Edit Delivery Details</h4>
                        <hr/>
                        <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
                            <div className="form-group">
                                <input type="name"  ref={register({ required: true})} className="form-control" name="name" id="name" placeholder="Name"/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="number"  ref={register({ required: true})} className="form-control" name="phone" id="phone" placeholder="Phone Number"/>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text"  ref={register({ required: true})} className="form-control" name="city" id="city" placeholder="City"/>
                                {errors.city && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="number"  ref={register({ required: true})} className="form-control" name="zip_code" id="zip_code" placeholder="Zip Code"/>
                                {errors.zip_code && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea ref={register({ required: true})} className="form-control" name="address" id="address" placeholder="Address"></textarea>
                                {errors.address && <span className="text-danger">This field is required</span>}
                            </div>
                                
                            <div className="form-group">
                                <input type="submit" className="btn login-btn btn-block" value="Proceed to pay"/>
                            </div>
                        </form>
                    </div>   

                    <div className="col-md-5 mb-5" style={{display: orderData ? 'block': 'none'}}>
                        <h4 className="pt-0">Payment Method</h4>
                        <hr/>
                        {orderSuccess &&
                            <div className=" mt-5 alert alert-success alert-dismissible fade show orderSuccess" role="alert">
                                <strong>Well done!</strong> Your payment has been successful. Now, click on the place order button.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
                        {!orderSuccess && <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>}
                    </div>
                    
                    <div className="offset-md-2 col-md-5">
                        <div className="restaurant-info mb-2">
                            <p>
                                From <strong> Newaz Dines, Dhaka</strong>
                            </p>
                            <p>Arriving in 20-30 min</p>
                            <p>107 Rd No 9</p>
                        </div>
                        {
                            cartInfo.map(cart => <ShipmentFood cartInfo={cart} key={cart.id} handleCart={props.handleCart} removeProduct={props.removeProduct}></ShipmentFood>)
                        }
                        <div className="mt-4">
                            <p className="d-flex justify-content-between">
                                <span>Subtotal : ({food.quantity} item)</span>
                                <span>${(total).toFixed(2)}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Tax :</span>
                                <span>${(tax).toFixed(2)}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Delivery fee :</span>
                                <span>${delivery}</span>
                            </p>
                            <p className="h5 d-flex justify-content-between mb-2">
                                <span>Total :</span>
                                <span>${grandTotal}</span>
                            </p>
                            <Link to="/shipmentDetails"><button disabled={!orderSuccess}  className="btn d-block login-btn mt-3 mb-4">Place Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer></Footer>}
        </div>
    );
};

export default Shipment;