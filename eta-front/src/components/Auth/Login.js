import React from 'react';
import styled from "styled-components";
import Login_logo from "../../asset/img/Login_Logo.svg";
import Login_title from "../../asset/img/Login_title.svg";
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

    const Title = styled.img`
        margin-top: 200px;
        align-items: center;
        display: flex;
        width: 191px;
        height: 24px;
        margin-left: 92px;
        
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
                <Title src={Login_title} alt="Login_title" ></Title>
                <Logo src={Login_logo} alt="Login_logo"/>
                <SocialKakao />
            </Div>
        </DDiv>
    );
}

export default Login;