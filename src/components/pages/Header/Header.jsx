import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Loader from 'components/Loader/Loader';
import Access from 'components/Access/Access';
import { selectIsLogin } from 'store/selectors';

const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <AppBar position="static" color="warning">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Navigation />
          {isLogin ? <UserMenu /> : <Access />}
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
