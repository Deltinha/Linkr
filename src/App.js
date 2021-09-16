import * as S from './AppStyled'
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';
import Timeline from './screens/Timeline/Timeline';
import Hashtag from './screens/Hashtag/Hashtag';

export default function App() {
  return (
    <S.App>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            
          </Route>

          <Route exact path='/sign-up'>
            <SignUp />
          </Route>

          <>
            {/* NAVBAR */}
            {/* SIDEBAR */}
            <Route exact path='/timeline'>
              <Timeline />
            </Route>

            <Route exact path='/myposts'>

            </Route>

            <Route exact path='/mylikes'>

            </Route>

            <Route exact path='/user/:id'>

            </Route>

            <Route exact path='/hashtag/:hashtag'>
              <Hashtag />
            </Route>
          </>
        </Switch>
      </BrowserRouter>
    </S.App>
  );
}
