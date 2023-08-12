import React from 'react';
import styled from "styled-components";
import Login_logo from "../../asset/img/Logo_Login.png"; 
import SocialKakao from './SocialKakao';

function Login() {
    const DDiv = styled.div`
        display: flex;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        height: 100vh;
    `;

    const Div = styled.div`
        width: 375px;
        background: #EEEBF6;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
    `;

    const H1 = styled.div`
        margin-top: 200px;
        //font-family: Sandoll Nemony;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
    `;

    const Logo = styled.img`
        margin-top: 16px;
        display: flex;
        margin-left: 107px;
        align-items: center;
        width: 160px;
        height: 160px;
        
    `;
    
    return (
        <DDiv>  
            <Div>
                <H1>모든 팬의 마음은 소중하니까</H1>
                <Logo src={Login_logo} alt="Login_logo"/>
                <SocialKakao />
            </Div>
        </DDiv>
    );
    }

export default Login;