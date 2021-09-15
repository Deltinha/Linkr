import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './SignLogStyled';


export default function SignUp (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    function submitForm (){
        console.log('submitting');
    }

    function emptyInputExist(){
        return (email === '' || password === '' || username === '' || avatar === '');
    }

    function inspectInputs(e){
        e.preventDefault();

        if (emptyInputExist()){
            alert('All inputs must be filled out before submitting')
        }
        else {
            submitForm();
        }
    }

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

            <S.Form onSubmit={inspectInputs}>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email'/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password'/>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} type='text'/>
                <input onChange={(e)=>setAvatar(e.target.value)} value={avatar} type='url'/>
                <input type="submit" value="Sign Up" />
                <Link to='/'>Switch back to log in</Link>
            </S.Form>
        </S.SignUp>
    );
}