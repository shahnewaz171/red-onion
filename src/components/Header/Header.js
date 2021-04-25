import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = event => {
        console.log(event);
    };

    return (
       <div>
           <Navbar></Navbar>
           <div>
               <div className="">
                   <section className=" banner d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1>Best food waiting for you belly</h1>
                            <div className="col-6 col-md-6 my-4 mx-auto">
                                <div className="search-box">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input name="search" ref={register({ required: true })} placeholder="Search food items" className="form-control search-input"/>
                                        <input type="submit" className="btn btn-style px-4 search-btn" />
                                        {errors.search && <span className="d-block">This field is required</span>}
                                    </form>
                                </div>
                            </div>
                        </div>
                   </section>
               </div>
           </div>
       </div>
    );
};

export default Header;