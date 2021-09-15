import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to='/'>

        </Route>

        <Route exact to='/cadastro'>

        </Route>

        <>
          {/* NAVBAR */}
          {/* SIDEBAR */}
          <Route exact to='/timeline'>

          </Route>

          <Route exact to='/myposts'>

          </Route>

          <Route exact to='/mylikes'>

          </Route>

          <Route exact to='/user/:id'>

          </Route>

          <Route exact to='/hashtag/:hashtag'>

          </Route>
          <>
          </Switch>
        </BrowserRouter>
  );
}
