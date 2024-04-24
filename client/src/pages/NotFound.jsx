import { Box, Container, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Styles from '../assets/Styles';

const NotFound = () => {
  return (
    <Container>
      <Box sx={Styles.NotFoundContainerBox}>
        <SentimentVeryDissatisfiedIcon
          gutterBottom
          sx={{ color: '#1e88e5', fontSize: 100 }}
        />
        <Typography
          variant="h4"
          align="center"
          sx={Styles.NotFoundContainerTypography}
        >
          Sorry , We can't find this page.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
