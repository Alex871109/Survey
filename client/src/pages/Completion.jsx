import { Box, Container, Typography } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Completion = () => {
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
        <InsertEmoticonIcon gutterBottom sx={{ fontSize: 100 , color: '#1e88e5'}} />
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#1e88e5',
          }}
        >
          Congratulations, you successfully acquired 5 credits!
        </Typography>
      </Box>
    </Container>
  );
};

export default Completion;
