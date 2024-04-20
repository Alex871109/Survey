import { useState, useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Header } from './components/Header';
import { ServerError } from './components/ServerError';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import { useFetchUsersQuery } from './store';
import Payment from './components/Payments';
import { PrivateRoute } from './components/PrivateRoute';
import { SurveyForm } from './components/SurveyForm';
import { Dashboard } from './components/Dashboard';
import NotFound from './components/NotFound';
import Completion from './components/Completion';
import LandingPage from './components/LandingPage';

function App() {
  const [logged, setLogged] = useState(false);
  const { data, error, isLoading, refetch } = useFetchUsersQuery();

  useEffect(() => {
    if (data) {
      setLogged(true);
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Skeleton variant="rectangular" height={45} />
        </Grid>
        <Grid item xs={1}>
          <Skeleton variant="circular" width={45} height={40} />
        </Grid>
      </Grid>
    );
  }

  return (
    <BrowserRouter>
      <Header
        logged={logged}
        error={error}
        data={data}
        isLoading={isLoading}
        setLogged={setLogged}
      />
      <Routes>
        <Route
          path="/"
          element={!(logged) ? <LandingPage /> :  <Navigate to={'/surveys'} />}
        />
        <Route
          path="/surveys"
          element={
            <PrivateRoute logged={logged || !!data} redirect={'/'}>
              <Dashboard userData={data}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/surveys/new"
          element={
            <PrivateRoute logged={logged || !!data} redirect={'/'}>
              <SurveyForm refetchUsers={refetch} />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/servererror" element={<ServerError />} />
        <Route path="/completion" element={<Completion />} />
        <Route
          path="/payments"
          element={
            <PrivateRoute logged={logged || !!data} redirect={'/'}>
              <Payment />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
