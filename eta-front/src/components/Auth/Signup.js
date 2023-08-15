import React, { useState } from 'react';
import DropdownSelect from 'react-dropdown-select';
import axios from 'axios';
import styled from 'styled-components';
import profile_pic from '../../asset/img/Icon_SignupProfile.svg';
import Age_Check from '../../asset/img/Age_Check.svg';
import Start_Inactive from "../../asset/img/Start_Inactive.svg";
import Button_Start from "../../asset/img/Button_Start.svg";
import { useNavigate } from 'react-router-dom';
import PictureModal from './PictureModal';
import Unchecked from "../../asset/img/Unchecked.svg";
import Checked from "../../asset/img/Checked.svg";

const DDiv = styled.div`
        display: flex;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        //align-items: center;
    `;

    const Div = styled.div`
        width: 375px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
        //align-items: center; /* Center vertically */
        height: 100vh;
    `;

    const Header4 = styled.div`
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
        margin-top: 64px;
        margin-bottom: 24px;
    `;

    const Button = styled.button`
        cursor: pointer;
        border: none;
        background: transparent;
        //width: 96px;
        height: 96px;
        justify-content: center;
        margin-bottom: 24px;
    `;

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
    `;

    const NicknameBox = styled.input`
        width: 311px;
        height: 48px;
        border-radius: 8px;
        border: 1px solid #ABABAB;
        font-size: 14px;
        padding-left: 16px;
        align-items: center;
        display: flex;  
        &:focus,
        &:hover,
        &:active {
            border-color: #5639A6;
        }
    `;
    
    const FandomSelect = styled.button`
        width: 311px;
        height: 48px;
        border-radius: 8px;
        border: 1px solid #ABABAB;
        background-color: #FFFFFF;
        font-size: 14px;
        color: #ABABAB;
        padding-left: 16px;
        align-items: center;
        display: flex;
        cursor: pointer;
        &:focus,
        &:hover{
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
    margin-left: 290px;
`;
const Header3 = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    margin-bottom: 8px;
    margin-right: 235px;
`;
const Check = styled.img`
    width: 350px;
    height: 52px;
`;
const FandomDetail = styled.div`
    font-size: 9px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0em;
    color: #ABABAB; 
    margin-left: 120px;

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

 const Checking = styled.div`
    margin-top: 16px;
 `;
 const CheckMsg = styled.a`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #ABABAB;

 `;

function Signup() {
    const [inputCount, setInputCount] = useState(0); // Store the character count
    const [userNickname, setUserNickname] = useState("");
    const [userFanclub, setUserFanclub] = useState("");
    const [imageSrc, setImageSrc] = useState(Start_Inactive); 
    const [isClicked, setIsClicked] = useState(false); 
    const [checkActive, setCheckActive] = useState(false);

    const onInputHandler = (e) => {
        const data = {
            "userKakaoNickname" : userNickname,
            "userFanclub": userFanclub,
        }
        setInputCount(e.target.value.length);
        setUserNickname(e.target.value);
    };
    
    /* 모달창 */
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleClick = () => {
        if (isClicked) {
          setImageSrc(Start_Inactive);
          setIsClicked(false); 
            
        } else {
            setImageSrc(Button_Start);
            setIsClicked(true); 
            navigate("/");
          }
      };
      const handleModalClose = () => {
        closeModal();
    };

    const handleNoClick = () => {
        // Handle "No" button click
        // For example, show a message or perform an action
        closeModal();
    };
    
    const handleOverlayClick = (event) => {
        event.stopPropagation(); // Prevent the click from reaching the modal's onClick handler
    };
    const handleCheckClick = () => {
        setCheckActive(!checkActive); // Toggle the checkActive state
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
                <Header4>회원가입</Header4>
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
                    <Header3>팬덤 설정</Header3>
                    <FandomDetail>* 팬덤은 한 번 설정하면 변경할 수 없어요.</FandomDetail>

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
                            display: 'flex',
                            cursor: 'pointer',
                            outline: 'none', // Remove the default outline
                        }}
                    />
                </Container>
                <Container>
                    <Header3>연령 인증</Header3>
                    <Check src={Age_Check} alt="Age_Chek" />
                    <Checking>
                        {checkActive ? ( // Use conditional rendering based on checkActive state
                            <ActiveCheck src={Checked} alt="Checked" onClick={handleCheckClick} />
                        ) : (
                            <InactiveCheck src={Unchecked} alt="Unchecked" onClick={handleCheckClick} />
                        )}                        
                        <CheckMsg style={{ color: checkActive ? '#5639A6' : '#ABABAB' }}>네, 40-50대 입니다.</CheckMsg>
                    </Checking>
                    
                </Container>
                <StartBtn 
                    src={imageSrc} 
                    // onClick={handleClick} 
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