import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postSignUp } from '../../services/linkr-api';
import * as S from './SignLogStyled';



export default function SignUp (){

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [inputDisabled, setInputDisabled] = useState(false);

    function processError(status){
        if (status === 400){
            alert('invalid picture url')
        }
        if (status === 403){
            alert('email is already taken')
        }
        setInputDisabled(false);
    }

    function submitForm (){
        const body = {
            email,
            password,
            username,
            pictureUrl
        };

        setInputDisabled(true);
        
        postSignUp(body)
            .then(()=>history.push('/'))
            .catch((res)=>processError(res.response.status));
    }

    function emptyInputExist(){
        return (email === '' || password === '' || username === '' || pictureUrl === '');
    }

    function inspectInputs(e){
        e.preventDefault();

        if (emptyInputExist()){
            alert('all inputs must be filled out before submitting')
        }
        else {
            submitForm();
        }
    }

    return (
        <S.SignUp>
            <S.WoodmarkContainer>
                <S.TextContainer>
                    <h1>linkr</h1>
                    <h2>
                    save, share and discover<br />
                    the best links on the web
                    </h2>
                </S.TextContainer>
            </S.WoodmarkContainer>

            <S.Form onSubmit={inspectInputs}>
                <input 
                disabled={inputDisabled} 
                onChange={(e)=>setEmail(e.target.value)} 
                value={email} type='email'
                placeholder='e-mail'/>
                <input 
                disabled={inputDisabled} 
                onChange={(e)=>setPassword(e.target.value)} 
                value={password} type='password'
                placeholder='password'/>
                <input 
                disabled={inputDisabled} 
                onChange={(e)=>setUsername(e.target.value)} 
                value={username} type='text'
                placeholder='username'/>
                <input 
                disabled={inputDisabled} 
                onChange={(e)=>setPictureUrl(e.target.value)} 
                value={pictureUrl} type='url'
                placeholder='picture url'/>
                <input disabled={inputDisabled} type="submit" value="Sign Up" />
                <Link to='/'>Switch back to log in</Link>
            </S.Form>
        </S.SignUp>
    );
}