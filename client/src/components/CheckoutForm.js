import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useAddUserCreditsMutation } from '../store/apis/usersApi';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CheckoutForm() {
  const [addCredits, results] = useAddUserCreditsMutation(5);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  let message;

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

    addCredits(5);
    setIsProcessing(false);
    navigate('/completion');
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button
        variant="contained"
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        sx={{ marginTop: 2 }}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? 'Procesando ... ' : 'Pagar ahora'}
        </span>
      </Button>
    </form>
  );
}
