import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../images/ICON/logo3-min.png';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef();
    password.current = watch('password');
    const onSubmit = data => console.log(data);

    return (
        <div className="main">
            <div className="logo text-center mt-5 pt-4 pb-3">
                <Link to="/"><img src={logo} alt="logo" className="img-fluid"/></Link>
            </div>
            <div className="log-in">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                        <div className="form-group">
                            <input type="name" ref={register({ required: true, minLength: 4 })} className="form-control" name="name" id="name" placeholder="Name"/>
                            {errors.name && errors.name.type === "required" && <span className="text-danger">Please enter your name</span>}
                            {errors.name && errors.name.type === "minLength" && <span className="text-danger">Please enter at least 4 characters</span>}
                        </div>
                        <div className="form-group">
                            <input type="email"  ref={register({ required: true, pattern: /\S+@\S+\.\S+/})}className="form-control" name="email" id="email" placeholder="Email"/>
                            {errors.email && errors.email.type === "required" && <span className="text-danger">Please enter your email address</span>}
                            {errors.email && errors.email.type === "pattern" && <span className="text-danger">Please enter the valid email address</span>}
                        </div>
                        <div className="form-group">
                            <input type="password" ref={register({ required: true, minLength: 6 })}  className="form-control" name="password" id="password" placeholder="Password"/>
                            {errors.password && errors.password.type === "required" && <span className="text-danger">Please enter your password</span>}
                            {errors.password && errors.password.type === "minLength" && <span className="text-danger">Please enter at least 6 characters</span>}
                        </div>
                        <div className="form-group">
                            <input type="password" ref={register({ required: true, validate: (value) => value === password.current})} className="form-control" name="password_confirm" id="password_confirm" placeholder="Confirm Password"/>
                            {errors.password_confirm && errors.password_confirm.type === "required" && <span className="text-danger">This field is required</span>}
                            {errors.password_confirm && errors.password_confirm.type === "validate" && <span className="text-danger">Password does not match</span>}
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn login-btn btn-block" value="Sign Up"/>
                        </div>
                        <div className="text-center">
                            <label style={{color: '#000'}}>
                                Already have an account?
                                <Link to="/login">
                                    <span className="text-danger ms-1 sign-bold">Login</span>
                                </Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;