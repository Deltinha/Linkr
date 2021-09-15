import * as S from './AppStyled'
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';
import LogIn from './screens/LogIn/LogIn';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

export default function App() {
  const [userData, setUserData] = useState('');
  return (
    <S.App>
    <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData}}>
        <Switch>
          <Route exact path='/'>
            <LogIn />
          </Route>

          <Route exact path='/sign-up'>
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
      </UserContext.Provider>
    </BrowserRouter>
    </S.App>
  );
}
