import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard({ subject, title, yes, no, lastResponded }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Title:
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" mt={1} gutterBottom>
          Subject:
        </Typography>
        <Typography variant="h5" component="div">
          {subject}
        </Typography>

        <Typography variant="body1" mt={1}>
          Yes :{yes}
        </Typography>
        <Typography variant="body1" mt={1}>
          No :{no}
        </Typography>
        <Typography variant="body1" mt={1}>
          Date sent:{'"a benevolent smile"'}
        </Typography>
        <Typography variant="body1" mt={1}>
          Last responded:{lastResponded.split('T')[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
