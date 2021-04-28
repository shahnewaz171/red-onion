import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './SimpleCardForm.css';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <div className="payment-info mt-5 pt-3">
      <form onSubmit={handleSubmit}>
        <CardElement />
        {
        paymentError && <p className="text-danger ms-2">{paymentError}</p>
      }
      {
        paymentSuccess && <p className="text-success ms-2">Your payment was successful</p>
      }
        <div className="d-flex align-items-center justify-content-between mx-md-2">
          <button className="btn pay-btn me-md-5 mt-4" type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default SimpleCardForm;