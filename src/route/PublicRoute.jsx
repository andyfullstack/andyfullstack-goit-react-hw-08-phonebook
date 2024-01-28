import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'store/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
