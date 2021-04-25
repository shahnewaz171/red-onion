import React from 'react';
import aboutImg1 from '../../images/other-images/1st-687824.png';
import aboutImg2 from '../../images/other-images/2nd-33614.png';
import aboutImg3 from '../../images/other-images/3rd-2047397.png';
import bussIcon from '../../images/ICON/bus.png';
import notificationIcon from '../../images/ICON/notification.png';
import carIcon from '../../images/ICON/car.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Why you choose us</h2>
                            <p className="mt-3 mb-5">Barton waited twenty always repair in within we do. An delighted offending curiosly my is dashwoods at. Boy properous increasing surrounded.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-image mb-3">
                            <img src={aboutImg1} className="img-fluid card-img-top" alt="b1"></img>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={bussIcon} className="img-fluid h-50 ms-2" alt="buss"/>
                                <div className="ms-3">
                                    <h5 className="card-title">Fast Delivery</h5>
                                    <p className="card-text mt-4 mb-2">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="#" className="aboutMore">
                                        <p className="d-flex align-items-center">
                                            <span className=" more-title">See more</span>
                                            <span className="ms-2 arrowIcon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                        </p>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-image mb-3">
                            <img src={aboutImg2} className="img-fluid card-img-top" alt="b1"></img>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={notificationIcon} className="img-fluid h-50 ms-2" alt="buss"/>
                                <div className="ms-3">
                                    <h5 className="card-title">Fast Delivery</h5>
                                    <p className="card-text mt-4 mb-2">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="#" className="aboutMore">
                                        <p className="d-flex align-items-center">
                                            <span className=" more-title">See more</span>
                                            <span className="ms-2 arrowIcon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                        </p>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-image mb-3">
                            <img src={aboutImg3} className="img-fluid card-img-top" alt="b1"></img>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <img src={carIcon} className="img-fluid h-50 ms-2" alt="buss"/>
                                <div className="ms-3">
                                    <h5 className="card-title">Fast Delivery</h5>
                                    <p className="card-text mt-4 mb-2">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="#" className="aboutMore">
                                        <p className="d-flex align-items-center">
                                            <span className=" more-title">See more</span>
                                            <span className="ms-2 arrowIcon"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                        </p>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;