import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { selectIsLogin } from 'store/selectors';

const Navi = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Box>
      <List
        sx={{
          display: 'flex',
          '& .MuiListItem-root': {
            color: '#5a5454',
            fontSize: '20px',
            borderRadius: 3,
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: '#ccc0c0',
          },
        }}
      >
        <ListItem to="/" component={Link}>
          Home
        </ListItem>
        {isLogin && (
          <ListItem to="/contacts" component={Link}>
            Contacts
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Navi;
