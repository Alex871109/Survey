import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDeleteSurveyMutation } from '../store';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemText, Divider, List } from '@mui/material';

export default function MyCard({
  subject,
  title,
  yes,
  no,
  lastResponded,
  surveyId,
  updateSurvey,
}) {
  const navigate = useNavigate();
  const [deleteSurvey] = useDeleteSurveyMutation();
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
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          color="error"
          variant="contained"
          sx={{ ml: '20px' }}
          onClick={handleDelete}
        >
          Delete
        </Button>

        <Button
          size="small"
          color="success"
          variant="contained"
          sx={{ mr: '20px' }}
          onClick={updateSurvey}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
