import { Skeleton } from '@mui/material';
import MyCard from './MyCard';
import { useFetchSurveysQuery } from '../store';

export const Dashboard = () => {
  let { data, error, isLoading } = useFetchSurveysQuery();

  if (isLoading)
    return (
      <>
        <Skeleton variant="rectangular" height={45} />
        <Skeleton variant="rectangular" height={45} />
      </>
    );

  if (data) {
    return [...data].reverse().map((survey) => {
      return (
        <MyCard
          key={survey.id}
          subject={survey.subject}
          title={survey.title}
          yes={survey.yes}
          no={survey.no}
          lastResponded={survey.lastResponded}
        />
      );
    });
  }
};
