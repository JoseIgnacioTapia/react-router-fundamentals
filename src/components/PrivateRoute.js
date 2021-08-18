import { Route, Redirect } from 'react-router';

//const PrivateRoute = props => {
// return (
//   <Route exact={props.exact} path={props.path} component={props.component} />
// );
//return <Route {...props} />;
//};

// Simulador Autenticación
let auth;
auth = true;
auth = null;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
