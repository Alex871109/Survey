 

import { Box, Typography } from '@mui/material';
import heroImage from '../assets/hero.png';
import Styles from '../assets/Styles';

export const Hero = () => {
  return (
    <Box
      sx={{
        ...Styles.heroBox,
        backgroundImage: `url(${heroImage})`,
        position: 'relative',
        textAlign: 'center',
        height: '100vh', // Establecemos la altura para ocupar toda la altura de la ventana
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centramos verticalmente el contenido
      }}
    >
      <Typography
        variant="h2"
        sx={{
          ...Styles.asideTitleTypography,
          color: 'white',
          position: 'absolute',
          top: '5%',
          left: 0,
          right: 0,
          

        }}
      >
        Simply Online Survey Software
      </Typography>
      <Typography
        variant="h4"
        sx={{
          ...Styles.asideTitleTypography,
          position: 'absolute',
          top: '20%',
          left: 0,
          right: 0,
          marginTop: '5%',
        }}
      >
        From Feedback to Strategy: Your Survey Solution
      </Typography>
    </Box>
  );
};
