import * as S from './AppStyled'
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';

export default function App() {
  return (
    <S.App>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          
        </Route>

        <Route exact path='/cadastro'>
          <SignUp />
        </Route>

        <>
          {/* NAVBAR */}
          {/* SIDEBAR */}
          <Route exact path='/timeline'>
            
          </Route>

          <Route exact path='/myposts'>

          </Route>

          <Route exact path='/mylikes'>

          </Route>

          <Route exact path='/user/:id'>

          </Route>

          <Route exact path='/hashtag/:hashtag'>

          </Route>
        </>
      </Switch>
    </BrowserRouter>
    </S.App>
  );
}
