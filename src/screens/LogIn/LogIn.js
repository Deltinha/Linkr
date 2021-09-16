import * as S from '../../components/shared/SignLogStyled';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { postLogIn, getTrendingHashtags } from '../../services/linkr-api';
import { UserContext } from '../../contexts/UserContext';

export default function LogIn() {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputDisabled, setInputDisabled] = useState(false);
    const {setUserData, token} = useContext(UserContext);

    function checkIfTokenIsValid(){
        if (token){
            getTrendingHashtags(token)
                .then(()=>history.push('/timeline'))
                .catch((res)=>res.response.status === 403 ? alert('sua sessão expirou. logue-se novamente') : '')
          }
    }

    function saveDataAndToken(data){
        setUserData(data.user);
        localStorage.setItem('token', data.token);
    }

    function processError(status){
        if (status === 403){
            alert('falha no login. email ou senha inválidos');
        }
        setInputDisabled(false);
    }

    function logInUser (){
        const body = {
            email,
            password
        };

        setInputDisabled(true);
        
        postLogIn(body)
            .then((res)=>{
                saveDataAndToken(res.data);
                history.push('/timeline');
            })
            .catch((res)=>processError(res.response.status));
    }

    function emptyInputExist(){
        return (email === '' || password === '');
    }

    function inspectInputs(e){
        e.preventDefault();

        if (emptyInputExist()){
            alert('todos os campos devem ser preenchidos')
        }
        else {
            logInUser();
        }
    }

    useEffect(checkIfTokenIsValid,[]);

    return (
        <S.LogIn>
            <S.WoodmarkContainer>
                <S.TextContainer>
                    <h1>linkr</h1>
                    <h2>
                    save, share and discover<br />
                    the best links on the web
                    </h2>
                </S.TextContainer>
            </S.WoodmarkContainer>
            <S.FormContainer>
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
                    <input disabled={inputDisabled} type="submit" value="Log In" />
                    <Link to='/sign-up'>First time? Create an account!</Link>
                </S.Form>
            </S.FormContainer>
        </S.LogIn>
    );
}