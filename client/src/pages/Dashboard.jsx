import { Skeleton, Typography, Container, Box } from '@mui/material';
import MyCard from '../components/MyCard';
import { useState } from 'react';
import { useFetchSurveysQuery } from '../store';
import Paginator from '../components/Paginator';
import { UserOption } from '../components/UserOption';
import Styles from '../assets/Styles';

export const Dashboard = ({ userData }) => {
  const { data, error, isLoading } = useFetchSurveysQuery();
  const [page, setPage] = useState(1);

  if (isLoading)
    return (
      <>
        <Skeleton variant="rectangular" height={300} />
      </>
    );

  if (data.length > 0) {
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
        <Box sx={Styles.dashboardContainerBox}>
          <Typography
            variant="h4"
            align="center"
            sx={Styles.dashboardContainerTypography}
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
