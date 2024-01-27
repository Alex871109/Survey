import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Container } from '@mui/material';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/bill/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY));
  }, []);

  

  return (
    <Container  maxWidth="md">
      <h4> Stripe</h4>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );
}

export default Payment;
