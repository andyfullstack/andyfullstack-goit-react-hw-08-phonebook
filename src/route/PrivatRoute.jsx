import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'store/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const shouldRedirect = !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
