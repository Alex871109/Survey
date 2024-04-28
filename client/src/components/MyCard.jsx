import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDeleteSurveyMutation } from '../store';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  List,
} from '@mui/material';

export default function MyCard({
  subject,
  title,
  yes,
  no,
  lastResponded,
  surveyId,
}) {
  const navigate = useNavigate();
  const [deleteSurvey, results] = useDeleteSurveyMutation();
  const handleDelete = async () => {
    try {
      await deleteSurvey(surveyId);
      navigate('/surveys');
    } catch (error) {
      navigate('/servererror', { state: error });
    }
  };

  return (
    <Card sx={{ minWidth: 275, mb: 1.5 }}>
      <CardContent>
        {/* <Typography variant="body1" gutterBottom>
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
          Last responded:{(lastResponded) ?lastResponded.split('T')[0]: 'Not yet responded.'}
        </Typography> */}

        <List>
          <ListItem>
            <ListItemText primary="Title:" secondary={title} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Subject:" secondary={subject} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Yes responses" secondary={yes} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="No responses" secondary={no} />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText
              primary="Last responded"
              secondary={
                lastResponded
                  ? lastResponded.split('T')[0]
                  : 'Not yet responded.'
              }
            />
          </ListItem>
          <Divider />
        </List>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
