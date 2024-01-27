import { useLocation } from 'react-router-dom';

export const ServerError = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2>Problema de carga desde el servidor</h2>
      {location.state}
    </>
  );
};
