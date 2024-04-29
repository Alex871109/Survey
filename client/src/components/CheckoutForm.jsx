import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useAddUserCreditsMutation } from '../store/apis/usersApi';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CheckoutForm() {
  const [addCredits] = useAddUserCreditsMutation();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isStripeLoading, setIsStripeLoading] = useState(true);
  let message;

  useEffect(() => {
    if (elements) {
      const element = elements.getElement('payment');
      element.on('ready', () => {
        setIsStripeLoading(false);
      });
    }
  }, [elements]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isProcessing) {
      return;
    }
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: 'if_required',
    });
    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        message = error.message;
      } else {
        message = 'An unexpected error occured.';
      }
      navigate('/servererror', { state: message });
      return;
    }

    try {
      await addCredits(5).unwrap();
      setIsProcessing(false);
      navigate('/completion');
    } catch (error) {
      navigate('/servererror', { state: error });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button
        variant="contained"
        type="submit"
        disabled={isStripeLoading || isProcessing || !stripe || !elements}
        sx={{ marginTop: 2 }}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? 'Processing ... ' : 'Pay now'}
        </span>
      </Button>
    </form>
  );
}
