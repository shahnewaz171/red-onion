import React from 'react';
import map from '../../images/orderComplete.png';
import deliveryImg from '../../images/other-images/delivery-person.png';
import personLogo from '../../images/other-images/person-logo.png';
import './ShipmentDetails.css';
import Footer from '../Footer/Footer';

const ShipmentDetails = () => {
    return (
        <div>
            <div className="container mb-5 single-food-card pb-4">
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <div style={{cursor: 'pointer'}}>
                            <img src={map} className="img-fluid" alt="map"/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                       <div className="bg-light p-4 rounded">
                           <img src={deliveryImg} className="ms-5" alt="delivery"/>
                           <div className="bg-white  rounded p-3 my-3">
                               <div>
                                   <div>
                                       <h6>Order Id :</h6>
                                       <p>60871be0835cc600241f522c</p>
                                   </div>
                                    <div>
                                        <h5>Your Location</h5>
                                        <p>Ashulia, Dhaka</p>
                                    </div>
                                    <div>
                                        <h5>Shop Address</h5>
                                        <p>Star Kabab and Restaurant</p>
                                    </div>
                               </div>
                           </div>
                           <h1>09:00</h1>
                           <p>Estimated delivery time</p>
                           <div className="bg-white rounded p-3 d-flex align-items-center mb-4">
                               <img src={personLogo} className="mr-2" alt="person" style={{width: "18%"}}/>
                               <div className="ms-4">
                                   <h6>Shahnewaz</h6>
                                   <p>Your Rider</p>
                               </div>
                           </div>
                           <button className="btn btn-block my-3 login-btn">Contact</button>
                       </div>
                    </div>
                </div>
            </div>
            {<Footer></Footer>}
        </div>
    );
};

export default ShipmentDetails;