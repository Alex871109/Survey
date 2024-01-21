import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetchUsersQuery } from './store';
import { useNavigate } from 'react-router-dom';

const Landing = () => (
  <h2>
    Landing <a href="/api/current_user"> current user</a>
  </h2>
);
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const NotFound = () => <h2>NotFound</h2>;
const ServerError = () => <h2>Problema de carga desde el servidor</h2>;

function App() {
  const [logged, setLogged] = useState(false);
  const { data, error, isLoading } = useFetchUsersQuery();
  // const navigate = useNavigate();
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
