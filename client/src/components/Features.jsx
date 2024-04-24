import { Box, Typography, Grid } from '@mui/material';
import feedbackImage from '../assets/feedback.jpg';
import Styles from '../assets/Styles';

export const Features = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h2" sx={Styles.asideTitleTypography}>
            Features
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <ul style={{ margin: '0px', padding: '0px' }}>
            <li>
              <Typography variant="body1" sx={Styles.asideSubtitleTypography}>
                Create custom surveys
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={Styles.asideSubtitleTypography}>
                Send surveys via email or link
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={Styles.asideSubtitleTypography}>
                Track survey responses
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={Styles.asideSubtitleTypography}>
                Get detailed analytics
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={feedbackImage}
            style={{ maxWidth: '90%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
