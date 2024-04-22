import { Box, Typography, Grid, Button, Container } from '@mui/material';
import heroImage from '../assets/hero.png';
import feedbackImage from '../assets/feedback.jpg';
import planing from '../assets/planing.jpg';
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '110vh',
        display: 'flex', //
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></Box>
  );
};

const Features = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid container item xs={12} justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1e88e5',
            }}
          >
            Features
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <ul style={{ margin: '0px', padding:'0px' }}>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Create custom surveys
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Send surveys via email or link
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Track survey responses
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Get detailed analytics
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={feedbackImage}
            style={{ maxWidth: '90%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Benefits = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Grid container spacing={1} alignItems="center" style={{ flexGrow: 1 }}>
        <Grid container item xs={12} justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1e88e5',
            }}
          >
            Benefits
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <ul style={{ margin: '0px', padding:'0px' }}>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Improve customer satisfaction
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Identify areas for improvement
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Make better business decisions
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 300,
                  letterSpacing: '.3rem',
                  color: '#1e88e5',
                }}
              >
                Increase customer loyalty
              </Typography>
            </li>
          </ul>
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
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#1e88e5',
        }}
      >
        Pricing
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#1e88e5',
          }}
        >
          Basic plan
        </Typography>
        <Typography
          variant="body1"
          ml={2}
          sx={{
            fontFamily: 'monospace',
            fontWeight: 600,
            letterSpacing: '.3rem',
            color: '#1e88e5',
          }}
        >
          5€ for 5 credits
        </Typography>
      </Box>
    </Box>
  );
};

const CTA = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '0px' }}>
      <Button
        variant="contained"
        sx={{ marginRight: '1px' }}
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
      <Grid container spacing={1}>
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
    </Container>
  );
};

export default LandingPage;
