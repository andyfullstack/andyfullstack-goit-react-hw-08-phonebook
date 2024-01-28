import { getCurrentUser } from 'store/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { fetchContacts } from 'store/contOperations.js';
import { Route, Routes } from 'react-router-dom';
import { selectIsLoading } from 'store/root/selectors.js';
import { selectUser } from 'store/selectors.js';
import Loader from './Loader/Loader';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Register from './pages/Reg/Register';
import Login from './pages/Login/Login';
import Error from './pages/Error/Error';
import PrivateRoute from 'route/PrivatRoute';
import PublicRoute from 'route/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !user && dispatch(getCurrentUser());
    user && dispatch(fetchContacts());
  }, [dispatch, user]);

  return isLoading ? (
    <p>boot page</p>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};
