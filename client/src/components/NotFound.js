import { Box, Container, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFound = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <SentimentVeryDissatisfiedIcon gutterBottom sx={{ color: '#1e88e5', fontSize: 100 }} />
        <Typography variant="h4"
            align="center"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1e88e5',
              textDecoration: 'none',
              textAlign: 'center',
              marginBottom: '8px',
            }}>
          Sorry , We can't find this page.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
