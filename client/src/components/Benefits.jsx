import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import planing from '../assets/planing.jpg';
import Styles from '../assets/Styles';

const benefits = [
  'Improve customer satisfaction',
  'Identify areas for improvement',
  'Make better business decisions',
  ' Increase customer loyalty',
];
export const Benefits = () => {
  return (
    <Paper elevation={3} sx={{ padding: '10px 20px', bgcolor: '#43B0D1' }}>
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
          <List>
            {benefits.map((benefit) => (
              <ListItem disablePadding key={benefit}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <CheckIcon fontSize={'medium'} sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h7' }}
                  primary={benefit}
                  sx={Styles.asideSubtitleTypography}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={planing}
            style={{ maxWidth: '90%', height: 'auto', display: 'block' }}
            alt="Feedback"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
