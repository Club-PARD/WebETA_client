import React, { useState } from 'react';
import DropdownSelect from 'react-dropdown-select';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import PictureModal from './PictureModal';
import profile_pic from '../../asset/img/Icon_SignupProfile.svg';
import Age_Check from '../../asset/img/Age_Checked.svg';
import Start_Inactive from "../../asset/img/Start_Inactive.svg";
import Button_Start from "../../asset/img/Button_Start.svg";
import Unchecked from "../../asset/img/Unchecked.svg";
import Checked from "../../asset/img/Checked.svg";
import Back from "../../asset/img/Back.svg";

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
    height: 100vh;
`;

const Header4 = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 64px;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    height: 96px;
    justify-content: center;
    margin-bottom: 24px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
`;

const NicknameBox = styled.input`
    width: 311px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #ABABAB;
    font-size: 14px;
    padding-left: 16px;
    margin-left: 32px;
    align-items: center;
    display: flex;  
    &:focus,
    &:hover,
    &:active {
        outline: none;
        border-color: #5639A6;
    }
`;

const Count = styled.div`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: right;
    color: #ABABAB;
    margin-top: 4px;
    margin-right: 32px;
`;

const Header3 = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 8px;
    margin-left: 32px;
`;

const Check = styled.img`
    width: 311px;
    height: 52px;
    margin-left: 32px;
    margin-bottom: 16px;
`;

const FandomDetail = styled.div`
    font-size: 9px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0em;
    color: #ABABAB; 
    margin-left: 4px;
`;

const StartBtn = styled.img`
    margin-left: 24px;
    margin-top: 35px;
    cursor: pointer;
    &:focus {
        color: #5639A6;
    }
`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const InactiveCheck = styled.img`
    margin-right: 4px;
    margin-top: 5px;
    cursor: pointer;
`;

 const ActiveCheck = styled.img`
    cursor: pointer;
 `;

 const CheckMsg = styled.div`
    font-size: 14px;
    font-weight: 500;
 `;

function Signup() {
    const [inputCount, setInputCount] = useState(0); 
    const [userNickname, setUserNickname] = useState("");
    const [userFanclub, setUserFanclub] = useState("");
    const [imageSrc, setImageSrc] = useState(Start_Inactive); 
    const [isClicked, setIsClicked] = useState(false); 
    const [checkActive, setCheckActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onInputHandler = (e) => {
        const data = {
            "userKakaoNickname" : userNickname,
            "userFanclub": userFanclub,
        }
        setInputCount(e.target.value.length);
        setUserNickname(e.target.value);
    };
    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const navigate = useNavigate();
    const handleFandomSelect = (userFanclub) => {
        setUserFanclub(userFanclub[0].value);
    };

    const handleModalClose = () => {
        closeModal();
    };

    const handleNoClick = () => {
        closeModal();
    };
    
    const handleOverlayClick = (event) => {
        event.stopPropagation(); 
    };
    const handleCheckClick = () => {
        setCheckActive(!checkActive); 
    };
    const SignupSuccess = async ()=>{
        try {
            const response = await axios.post("http://3.34.188.69:8080/api/user/signUp", {
                userKakaoId: localStorage.getItem("userKakaoId"), 
                userKakaoNickname: userNickname,
                userFanclub: userFanclub,
                kakaoAccessToken: localStorage.getItem("kakaoAccessToken"),
            })
            .then((response) => {
                console.log (response.data);
                return;
            })
        } catch (error) {
            console.error("Error sending Kakao login data:", error);
        }
    }
    
    return (
        <DDiv>
            <Div>
            <Header style={{marginBottom:'24px'}}>
                <Link to={`../`}>
                    <img src={Back} alt="back button"
                        style={{
                            marginLeft: "24px",
                            marginTop: "64px",
                            marginRight: "124px",
                        }}
                    />
                </Link>
                <Header4>회원가입</Header4>
            </Header>
            <Button onClick={openModal}>
                <img src={profile_pic} alt="profile_pic" />
            </Button>
            <Container>
                <Header3>닉네임</Header3>
                <NicknameBox 
                    placeholder='10자 이내로 원하는 닉네임을 적어주세요.'
                    onChange={onInputHandler} 
                    maxLength="10"  
                />
                <Count>{inputCount}/10</Count>
            </Container>
            <Container>
                <Header>
                    <Header3>팬덤 설정</Header3>
                    <FandomDetail>* 팬덤은 한 번 설정하면 변경할 수 없어요.</FandomDetail>
                </Header>
                <DropdownSelect
                    options={[
                        { label: '팬덤을 선택해주세요.', value: '' },
                        { label: '방탄소년단', value: '방탄소년단' },
                        { label: '세븐틴', value: '세븐틴' },
                        { label: '엑소', value: '엑소' },
                        { label: '아이유', value: '아이유' },
                        { label: '뉴진스', value: '뉴진스' },
                        { label: '아이브', value: '아이브' },
                    ]}
                    valueField="value"
                    labelField="label"
                    values={[{ value: userFanclub }]}

                    onChange={handleFandomSelect}
                    //placeholder="팬덤을 선택해주세요."
                    selectedItemRenderer={({ item, props, state }) => (
                        <div {...props} style={{ ...props.style, color: '#1C1C1C', cursor: 'pointer' }}>
                            {item[props.labelField]}
                        </div>
                    )}
                    style={{
                        width: '311px',
                        height: '48px',
                        borderRadius: '8px',
                        border: '1px solid #ABABAB',
                        backgroundColor: '#FFFFFF',
                        fontSize: '14px',
                        color: '#ABABAB',
                        paddingLeft: '16px',
                        alignItems: 'center',
                        marginLeft: '32px',
                        display: 'flex',
                        cursor: 'pointer',
                        outline: 'none', 
                    }}
                />
            </Container>
            <Container>
                <Header3>연령 인증</Header3>
                <Check src={Age_Check} alt="Age_Chek"/>
                <Header style={{marginLeft:'115px'}}>
                    {checkActive ? ( 
                        <ActiveCheck src={Checked} alt="Checked" onClick={handleCheckClick} />
                    ) : (
                        <InactiveCheck src={Unchecked} alt="Unchecked" onClick={handleCheckClick} />
                    )}                        
                    <CheckMsg style={{ 
                        color: checkActive  ? '#5639A6' : '#ABABAB',
                        fontWeight: checkActive ? 600 : 500
                        }}>네, 40-50대 입니다.</CheckMsg>
                </Header>
            </Container>
            <StartBtn 
                src={imageSrc} 
                // onClick ={SignupSuccess}
                onClick={() => {
                    if (userNickname && userFanclub && checkActive) {
                        SignupSuccess();
                        navigate("/");  //로그인 후 화면으로 넘어가야 함.
                    }
                    }}
                onMouseEnter={() => setImageSrc(Button_Start)} 
                onMouseLeave={() => setImageSrc(Start_Inactive)}
            />

            </Div>        
            {isModalOpen && (
            <Overlay onClick={handleOverlayClick}>
                <PictureModal onClose={handleModalClose} onNoClick={handleNoClick} />
            </Overlay>
            )}
        </DDiv>
    );
}

export default Signup;