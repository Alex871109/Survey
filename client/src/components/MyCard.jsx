import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDeleteSurveyMutation } from '../store';
import { useNavigate } from 'react-router-dom';

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
          Last responded:{(lastResponded) ?lastResponded.split('T')[0]: 'Not yet responded.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
