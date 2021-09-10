import { Dashbord } from 'pages/Dashboard';
import { Home } from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"exact>
          <Home />
        </Route>
        <Route path="/dashboard"exact>
          <Dashbord />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export { Routes };
