import { Box, Typography, Paper, Button } from '@mui/material';
import Styles from '../assets/Styles';

export const Pricing = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '10px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '700px',
        bgcolor:'#43B0D1'
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
          }}
        >
          5€ for 5 credits
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '0px' }}>
          <Button
            variant="contained"
            sx={{ marginRight: '1px' }}
            onClick={() => (window.location.href = '/auth/google')}
          >
            Sign up for free
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
