import React from 'react';
import styled from 'styled-components';
import profile_pic from '../../asset/img/Icon_SignupProfile.png';

function Signup() {
    const DDiv = styled.div`
        display: flex;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        height: 100vh;
    `;

    const Div = styled.div`
        width: 375px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
    `;
    const Header4 = styled.div`
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
        margin-top: 64px;
        margin-bottom: 24px;
    `;

    const handleButtonClick = () => {
        console.log('Added your profile picture successfully');
    };

    const Button = styled.button`
        cursor: pointer;
        border: none;
        background: transparent;
        width: 96px;
        height: 96px;
        justify-content: center;
        margin-left: 139px;
    `;
    return (
        <DDiv>
            <Div>
                <Header4>회원가입</Header4>
                <Button onClick={handleButtonClick}>
                    <img src={profile_pic} alt="profile_pic" />
                </Button>
            </Div>
        </DDiv>
        
    );
    }

export default Signup;