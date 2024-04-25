import {
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import feedbackImage from '../assets/feedback.jpg';
import Styles from '../assets/Styles';

const features = [
  'Create custom surveys',
  'Send surveys via email or link',
  'Track survey responses',
  ' Get detailed analytics',
];
export const Features = () => {
  return (
    <Paper elevation={3} sx={{ padding: '10px 20px', bgcolor: '#43B0D1' }}>
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
          <List>
            {features.map((feature) => (
              <ListItem disablePadding key={feature}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <CheckIcon fontSize={'medium'} sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h7' }}
                  primary={feature}
                  sx={Styles.asideSubtitleTypography}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={feedbackImage}
            style={{ maxWidth: '90%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
