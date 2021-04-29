import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../images/ICON/logo3-min.png';
import { useAuth } from '../Login/UseAuth';

const Signup = () => {
    const auth = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef();
    password.current = watch('password');
    const [returningUser , setReturningUser] = useState(true);
    const onSubmit = data => {
        if(returningUser){
            if(data.email && data.password){
                auth.signInUser(data.email, data.password);
            }
        }
        else{
            if(data.name && data.email && data.password && data.confirm_password){
                auth.createUser(data.email, data.confirm_password, data.name)
            }
        }
        console.log(data);
    };

    return (
        <div className="main">
            <div className="logo text-center mt-5 pt-4 pb-3">
                <Link to="/"><img src={logo} alt="logo" className="img-fluid"/></Link>
            </div>
            <div className="log-in">
                <div className="container">
                    {returningUser ? <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                        {
                        auth.user != null && <p className="text-danger">{auth.user.error}</p>
                        }
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
                            <input type="password" ref={register({ required: true, validate: (value) => value === password.current})} className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
                            {errors.confirm_password && errors.confirm_password.type === "required" && <span className="text-danger">This field is required</span>}
                            {errors.confirm_password && errors.confirm_password.type === "validate" && <span className="text-danger">Password does not match</span>}
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn login-btn btn-block" value="Sign Up"/>
                        </div>
                        <div className="text-center">
                            <label style={{color: '#000'}}>
                                Already have an account?
                                <span onClick={() => setReturningUser(false)} className="text-danger ms-1 sign-bold">Login</span>
                            </label>
                        </div>
                    </form>
                    :
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
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
                            <input type="submit" className="btn login-btn btn-block" value="Sign In"/>
                        </div>
                        <div className="text-center pt-2">
                            <label style={{color: '#000'}}>
                                Don't have an account?
                                <span onClick={() => setReturningUser(true)} className="text-danger ms-1 sign-bold">Create an account</span>
                            </label>
                        </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default Signup;