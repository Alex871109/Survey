import { Box, Typography } from '@mui/material';
import heroImage from '../assets/hero.png';
import Styles from '../assets/Styles';

export const Hero = () => {
  return (
    <Box
      sx={{
        ...Styles.heroBox,
        backgroundImage: `url(${heroImage})`,
        position: 'relative', // Añadimos posición relativa para posicionar el texto sobre la imagen
        textAlign: 'center', // Centramos horizontalmente
      }}
    >
      <Typography
        variant="h2" // Puedes ajustar el tamaño del texto según tus necesidades
        sx={{
          ...Styles.asideTitleTypography,
          position: 'absolute',
          top: '5%',
          left: 0,
          right: 0,
          color: 'white',
        }}
      >
        Simply Online Survey Software
      </Typography>
      <Typography
        variant="h4" // Puedes ajustar el tamaño del texto según tus necesidades
        sx={{
          ...Styles.asideTitleTypography,
          position: 'absolute',
          top: '20%',
          left: 0,
          right: 0,
        }}
      >
        From Feedback to Strategy: Your Survey Solution
      </Typography>
    </Box>
  );
};
