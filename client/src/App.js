import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ServerError } from './components/ServerError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetchUsersQuery } from './store';
import Payment from './components/Payments';

const Landing = () => (
  <h2>
    Landing <a href="/api/current_user"> current user</a>
  </h2>
);
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const NotFound = () => <h2>NotFound</h2>;
const Completion = () => <h2>Compra exitosa</h2>;

function App() {
  const [logged, setLogged] = useState(false);
  const { data, error, isLoading } = useFetchUsersQuery();

  useEffect(() => {
    if (data) {
      setLogged(true);
    }
  }, [data, error]);
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
        <Route path="/surveys" element={<Dashboard />} />
        <Route path="/surveys/new" element={<SurveyNew />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/servererror" element={<ServerError />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
