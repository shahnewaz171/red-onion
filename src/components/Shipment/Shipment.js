import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-5 single-food-card">
                <div className="shipment-img">
                    <div className="shipment-form">
                        <div className="container">
                            <h3 className="pt-3 text-center">Shipment Information</h3>
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
                                    <input type="text"  ref={register({ required: true})} className="form-control" name="address" id="address" placeholder="Address"/>
                                    {errors.address && <span className="text-danger">This field is required</span>}
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
                                    <Link to="/shipmentDetails">
                                        <input type="submit" className="btn login-btn btn-block" value="Proceed to pay"/>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;