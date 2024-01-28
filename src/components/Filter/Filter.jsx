import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { setFilter } from 'store/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      component="div"
      sx={{
        marginTop: 4,
        width: 500,
      }}
    >
      <Typography component="p" variant="h4">
        Filter contacts
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        id="filter"
        label="Name"
        name="filter"
        autoComplete="filter"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default Filter;
