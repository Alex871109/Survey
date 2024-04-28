import { Box, Grid, Button, Container } from '@mui/material';
import { Pricing } from '../components/Pricing';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import heroImage from '../assets/hero.png';

const LandingPage = () => {
  return (
    <Container sx={{ marginTop: '10px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Hero heroImage={heroImage}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Features />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex'}}>
          <Benefits />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Pricing />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
