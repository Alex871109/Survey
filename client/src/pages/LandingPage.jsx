import { Box, Grid, Button, Container } from '@mui/material';
import heroImage from '../assets/hero.png';
import { Pricing } from '../components/Pricing';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import Styles from '../assets/Styles';

const LandingPage = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              ...Styles.heroBox,
              backgroundImage: `url(${heroImage})`,
            }}
          ></Box>
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
          <Box sx={{ textAlign: 'center', marginTop: '0px' }}>
            <Button
              variant="contained"
              sx={{ marginRight: '1px' }}
              onClick={() => (window.location.href = '/auth/google')}
            >
              Sign up for free
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
