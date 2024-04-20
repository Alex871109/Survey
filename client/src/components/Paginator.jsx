import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginator = ({count, setPage, page}) => {
//     const [page, setPage] =useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default Paginator