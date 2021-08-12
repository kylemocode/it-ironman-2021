import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

const Lbj = lazy(() =>
  import('./players/Lbj' /* webpackChunkName: "LBJ" */)
);
const Curry = lazy(() =>
  import('./players/Curry' /* webpackChunkName: "Curry" */)
);
const Kd = lazy(() =>
  import('./players/Kd' /* webpackChunkName: "KD" */)
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/lbj/">
              LBJ
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/curry/">
              Curry
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/kd/">
              KD
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/lbj/" component={Lbj} />
          <Route path="/curry/" component={Curry} />
          <Route path="/kd/" component={Kd} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
