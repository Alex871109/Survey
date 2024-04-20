import { Skeleton, Typography, Container, Box } from '@mui/material';
import MyCard from '../components/MyCard';
import { useState } from 'react';
import { useFetchSurveysQuery } from '../store';
import Paginator from '../components/Paginator';
import { UserOption } from '../components/UserOption';

export const Dashboard = ({ userData }) => {
  const { data, error, isLoading } = useFetchSurveysQuery();
  const [page, setPage] = useState(1);

  console.log(userData.credits);

  if (isLoading)
    return (
      <>
        <Skeleton variant="rectangular" height={300} />
      </>
    );

  if (data.length > 0) {
    console.log(data);
    const surveys = [...data].reverse().map((survey) => {
      return (
        <MyCard
          key={survey._id}
          subject={survey.subject}
          title={survey.title}
          yes={survey.yes}
          no={survey.no}
          lastResponded={survey.lastResponded}
          surveyId={survey._id}
        />
      );
    });

    return (
      <>
        {surveys[page - 1]}
        <Paginator count={surveys.length} setPage={setPage} page={page} />
      </>
    );
  } else {
    return (
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1e88e5',
              textDecoration: 'none',
              textAlign: 'center',
              marginBottom: '8px',
            }}
          >
            Still don't have any surveys.
            <br />
            Shall we begin?
          </Typography>

          <UserOption currentCredits={userData.credits} isHeader={false} />
        </Box>
      </Container>
    );
  }
};
