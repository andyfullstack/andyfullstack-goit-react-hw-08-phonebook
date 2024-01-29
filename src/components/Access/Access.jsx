import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

const Access = () => {
  return (
    <Box>
      <List
        sx={{
          display: 'flex',
          '& .MuiListItem-root': {
            color: '#5a5454',
            fontSize: '20px',
            fontWeight: '500',
            borderRadius: 3,
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: '#ccc0c0',
            transition: '2s, ease-in-out 1s',
          },
        }}
      >
        <ListItem to="/login" component={Link}>
          Login
        </ListItem>
        <ListItem to="/register" component={Link}>
          Registration
        </ListItem>
      </List>
    </Box>
  );
};

export default Access;
