import { Box, Typography } from '@mui/material';
import Styles from '../assets/Styles';

export const Pricing = () => {
  return (
    <Box
      sx={{
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ mt: 1 }}>
        <Typography variant="h3" sx={Styles.asideTitleTypography}>
          Basic plan
        </Typography>
        <Typography
          variant="h5"
          ml={2}
          sx={{
            ...Styles.asideSubtitleTypography,
            fontWeight: 600,
            color: '#1e88e5',
          }}
        >
          5€ for 5 credits
        </Typography>
      </Box>
    </Box>
  );
};
