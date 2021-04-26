import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/logo-min.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-6 mb-5">
                        <Link to="#">
                            <img src={footerLogo} className="img-fluid" alt="logo"/>
                        </Link>
                    </div>
                    <div className="col-6 col-md-3">
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about">About Online Food</Link>
                            </li>
                            <li>
                                <Link to="/blog">Read Our Blog</Link>
                            </li>
                            <li>
                                <Link to="/login">Sign up to deliver</Link>
                            </li>
                            <li>
                                <Link to="/restaurant">Add your restaurant</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/help">Get Help</Link>
                            </li>
                            <li>
                                <Link to="/faq">Read FAQ</Link>
                            </li>
                            <li>
                                <Link to="/cities">View All Cities</Link>
                            </li>
                            <li>
                                <Link to="/restaurant">Restaurants near me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-between align-items-center pb-4">
                    <small className="text-secondary">Copyright © 2021 Online Food</small>
                    <ul className="list-unstyled">
                        <li className="list-inline-item ms-3">
                            <Link to="#">Privacy Policy.</Link>
                        </li>
                        <li className="list-inline-item ms-3">
                            <Link to="#">Terms of Use</Link>
                        </li>
                        <li className="list-inline-item ms-3">
                            <Link to="#">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;