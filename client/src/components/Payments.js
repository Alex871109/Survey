import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Typography } from '@mui/material';

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
    <Container maxWidth="md">
      <Typography
        variant="h6"
        gutterBottom
        mt={2}
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#1e88e5',
          textDecoration: 'none',
          textAlign: 'center',
        }}
      >
        You are about to pay 5€ for 5 credits using Stripe external service
      </Typography>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );
}

export default Payment;
