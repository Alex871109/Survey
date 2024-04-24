import Styles from '../assets/Styles';
import { Box, Container, Typography } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Completion = () => {
  return (
    <Container>
      <Box sx={Styles.completionBox}>
        <InsertEmoticonIcon
          gutterBottom
          sx={{ fontSize: 100, color: '#1e88e5' }}
        />
        <Typography variant="h3" align="center" sx={Styles.completionMessage}>
          Congratulations, you successfully acquired 5 credits!
        </Typography>
      </Box>
    </Container>
  );
};

export default Completion;
