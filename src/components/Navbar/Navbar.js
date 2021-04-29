import React, { useState } from 'react';
import logo from '../../images/logo2-min.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Navbar = (props) => {
    const auth = useAuth();
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? "navbar navbar-expand-lg navbar-light nav-pad sticky-top nav-shadow" : "navbar navbar-expand-lg navbar-light nav-pad"}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="img-fluid" alt="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="#" className="cartIcon">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="text-danger ms-1 food-length">{props.cart.length}</span>
                            </Link>
                        </li>
                        <li className="">
                            {auth.user ? 
                                <Link className="nav-link px-0" to="#">
                                    <span className="user-name">{auth.user.displayName}</span>
                                </Link>
                                :
                                <Link className="nav-link log-link" to="/login">
                                    <span>Login</span>
                                </Link>
                            }
                        </li>
                        <li className="nav-item">
                            {auth.user ?
                                <Link to="/"><button onClick={() => {auth.signOut()}}  className="btn btn-style px-4">Sign out</button></Link>
                                :
                                <Link to="/login"><button className="btn btn-style px-4">Sign up</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;