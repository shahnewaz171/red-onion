import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Shipment.css';
import img from '../../images/Breakfast/bagel-and-cream-cheese.png';
import Footer from '../Footer/Footer';

const Shipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <div className="shipment container my-5">
                <div className="row">
                    <div className="col-md-5 mb-5">
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
                    <div className="offset-md-2 col-md-5">
                        <div className="restaurant-info mb-2">
                            <p>
                                From <strong> Star Kabab And Restaurant</strong>
                            </p>
                            <p>Arriving in 20-30 min</p>
                            <p>107 Rd No 9</p>
                        </div>
                        <div className="single-checkout-item mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                            <img src={img} width="100px" alt="img"/>
                            <div>
                                <h6>Bagel And Cream Cheese</h6>
                                <h4>$ <span className="text-danger">9.50</span></h4>
                                <p style={{color: "#a5a3a3"}}>Delivery free</p>
                            </div>
                            <div className="checkout-item-button ml-3 btn">
                                <button className="btn font-weight-bolder">-</button>
                                <button className="btn bg-white rounded">1</button>
                                <button className="btn font-weight-bolder">+</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="d-flex justify-content-between">
                                <span>Subtotal : (4 item)</span>
                                <span>$18.00</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Tax :</span>
                                <span>$5.00</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Delivery fee :</span>
                                <span>$2.00</span>
                            </p>
                            <p className="h5 d-flex justify-content-between mb-2">
                                <span>Total :</span>
                                <span>$327</span>
                            </p>
                            <Link to="/shipmentDetails"><button className="btn btn-block btn-secondary mt-3 mb-4">Place Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer></Footer>}
        </div>
    );
};

export default Shipment;