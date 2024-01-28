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
            color: 'grey',
            fontSize: '20px',
            borderRadius: 3,
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: '#2c2e2f',
            // transition: 'margin-left 4s ease-in-out 1s',
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
