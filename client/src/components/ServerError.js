import { useLocation } from 'react-router-dom';

export const ServerError = () => {
  const location = useLocation();
  return (
    <>
      <h2>Problema de carga desde el servidor</h2>
      {location && location.state}
    </>
  );
};
