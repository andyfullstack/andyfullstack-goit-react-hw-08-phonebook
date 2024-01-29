import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { logoutUser } from 'store/operations';
import { selectUser } from 'store/selectors';
import { yellow } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    user && (
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}
          >
            <Typography display="flex" align="center" justifyContent="center">
              <HomeIcon
                color="success"
                sx={{
                  color: yellow[400],
                  align: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  paddingRight: '5px',
                }}
              ></HomeIcon>
              <Grid
                item
                sx={{
                  color: '#229313',
                  fontSize: '20px',
                  fontWeight: '500',
                  borderRadius: 3,
                  margin: ' auto',
                }}
              >
                Hello, {user.name} !
              </Grid>
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default UserMenu;
