import { Link } from 'react-router-dom';
import * as S from './SignLogStyled';


export default function SignUp (){
    return (
        <S.SignUp>
            <S.LeftContainer>
                <S.TextContainer>
                    <h1>linkr</h1>
                    <h2>
                    save, share and discover<br />
                    the best links on the web
                    </h2>
                </S.TextContainer>
            </S.LeftContainer>

            <S.Form>
                <input type='email' required/>
                <input type='password' required/>
                <input type='text' required/>
                <input type='url' required/>
                <button>Sign Up</button>
                <Link to='/'>Switch back to log in</Link>
            </S.Form>
        </S.SignUp>
    );
}