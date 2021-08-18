import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        aperiam dolor, numquam similique explicabo pariatur quo laborum beatae
        porro voluptates.
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);
  //'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>TemasReact</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componente</Link>
        </li>
      </ul>
      <Switch>
        <Route path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ipsum eaque unde optio quidem! Minus.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
