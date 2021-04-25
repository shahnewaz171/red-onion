import React from 'react';
import logo from '../../images/logo2-min.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pad">
            <div className="container">
                <Link className="navbar-brand" to="#">
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
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <span>Login</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-style px-4">Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;