import { Box, Grid, Typography } from '@mui/material';
import planing from '../assets/planing.jpg';
import Styles from '../assets/Styles';

export const Benefits = () => {
  return (
    <Box sx={{ padding: '20px 0' }}>
      <Grid container spacing={1} alignItems="center" style={{ flexGrow: 1 }}>
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h2" sx={Styles.asideTitleTypography}>
            Benefits
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
              <Typography
                variant="body1"
                sx={Styles.asideSubtitleTypography}
              >
                Improve customer satisfaction
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={Styles.asideSubtitleTypography}
              >
                Identify areas for improvement
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={Styles.asideSubtitleTypography}
              >
                Make better business decisions
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={Styles.asideSubtitleTypography}
              >
                Increase customer loyalty
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={planing}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
