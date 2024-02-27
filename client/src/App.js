import { useState, useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Header } from './components/Header';
import { ServerError } from './components/ServerError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetchUsersQuery } from './store';
import Payment from './components/Payments';
import { PrivateRoute } from './components/PrivateRoute';
import { SurveyForm } from './components/SurveyForm';
import { Dashboard } from './components/Dashboard';

const Landing = () => (
  <h2>
    Landing <a href="/api/current_user"> current user</a>
  </h2>
);
const NotFound = () => <h2>NotFound</h2>;
const Completion = () => <h2>Compra exitosa</h2>;

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
        <Route path="/" element={<Landing />} />
        <Route
          path="/surveys"
          element={
            <PrivateRoute logged={logged || !!data} redirect={'/'}>
              <Dashboard />
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
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
