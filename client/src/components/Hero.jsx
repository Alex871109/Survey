import { Box, Typography } from '@mui/material';
import Styles from '../assets/Styles';

export const Hero = ({ heroImage }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        ...Styles.heroImageBox,
      }}
    >
      <Box sx={Styles.heroTextBox}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            ...Styles.asideTitleTypography,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Simple Online Survey Software
        </Typography>
        <Typography
          variant="h4"
          sx={{
            ...Styles.asideTitleTypography,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          From Feedback to Strategy: Your Survey Solution
        </Typography>
      </Box>
    </Box>
  );
};
