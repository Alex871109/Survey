import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import feedbackImage from '../assets/feedback.jpg';
import planing from '../assets/planing.jpg';
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover', // Ensures image covers the entire container
        backgroundPosition: 'center', // Centers image horizontally and vertically
        minHeight: '110vh', // Sets a minimum height for the container
        display: 'flex', // Enables flexbox for centering content vertically
        justifyContent: 'center', // Centers content horizontally within the container
        alignItems: 'center', // Centers content vertically within the container
      }}
    ></Box>
  );
};

const Features = () => {
  return (
    <Box sx={{ padding: '50px 0' }}>
      <Grid container spacing={2} alignItems="center" style={{ flexGrow: 1 }}>
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h2">Features</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Create custom surveys
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Send surveys via email or link
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Track survey responses
          </Typography>
          <Typography variant="body1">Get detailed analytics</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={feedbackImage}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Benefits = () => {
  return (
    <Box sx={{ padding: '50px 0' }}>
      <Grid container spacing={2} alignItems="center" style={{ flexGrow: 1 }}>
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h2">Benefits</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Improve customer satisfaction
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Identify areas for improvement
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Make better business decisions
          </Typography>
          <Typography variant="body1">Increase customer loyalty</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={planing}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Pricing = () => {
  return (
    <Box
      sx={{
        padding: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">Pricing</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Basic plan</Typography>
        <Typography variant="body1" ml={2}>
          5€ for 5 credits
        </Typography>
      </Box>
    </Box>
  );
};

const CTA = () => {
  return (
    <Box sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Button
        variant="contained"
        sx={{ marginRight: '10px' }}
        onClick={() => (window.location.href = '/auth/google')}
      >
        Sign up for free
      </Button>
    </Box>
  );
};

const LandingPage = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12} md={6}>
          <Features />
        </Grid>
        <Grid item xs={12} md={6}>
          <Benefits />
        </Grid>
        <Grid item xs={12}>
          <Pricing />
        </Grid>
        <Grid item xs={12}>
          <CTA />
        </Grid>
      </Grid>
      <img src="../assets/feedback.jpg" style={{ objectFit: 'cover' }} />
    </Container>
  );
};

export default LandingPage;
