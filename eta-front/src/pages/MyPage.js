import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Back from "../asset/img/Back.svg";
import Profile_Edit from "../asset/img/Profile_Edit.svg";
import Edit from "../asset/img/Edit.svg";
import MyFandom from "../asset/img/MyFandom.svg";
import MyFan1 from "../asset/img/MyFan1.svg";
import MyFan2 from "../asset/img/MyFan2.svg";
import MyFan3 from "../asset/img/MyFan3.svg";
import SaveBtn from "../asset/img/SaveBtn.svg";

import axios from "axios";

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

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
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
const FileInput = styled.input`
  display: none;
`;
const Header3 = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 8px;
    margin-left: 32px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    width: 100%;
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
const EditBtn = styled.img`
    cursor: pointer;
    margin-left: -28px;
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
const FandomDetail = styled.div`
    font-size: 9px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0em;
    color: #ABABAB; 
    margin-left: 4px;
`;

const SaveButton = styled.img`
    width: 327px;
    height: 48px;
    margin-left: 26px;
    cursor: pointer;
`;

function MyPage() {
    const [userImage, setUserImage] = useState(null);
    const [inputCount, setInputCount] = useState(0); 
    const [userNickname, setUserNickname] = useState("조슈아가 나라다");


    const handleFileChange = (e) => {
        setUserImage(e.target.files[0]);
    };
    const handlePhotoUpload = async () => {
        if (!userImage) {
          console.warn("No file selected");
          return;
        }
    
        const formData = new FormData();
        formData.append("image", userImage);
        try {
            const response = await axios.post(
              "http://3.34.188.69:8080/api/user/uploadProfileImage",  // Change the API endpoint as needed
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
      
            console.log("Image upload success:", response.status);
          } catch (error) {
            console.error("Image upload failed:", error);
          }
    };
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
        setUserNickname(e.target.value);
    };

    return (
        <DDiv>
            <Div>
            <Header style={{marginBottom:'24px'}}>
                <Link to={`../`}>
                    <img 
                        src={Back} 
                        alt="back button"
                        style={{
                            marginLeft: "24px",
                            marginTop: "64px",
                        }}
                    />
                </Link>
                <Header4 style={{marginLeft: '108px'}}>마이페이지</Header4>
            </Header>
            <Button>
                <img src={Profile_Edit} alt="Profile_Edit" />
                <FileInput
                type="file"
                // id="imageUpload"
                accept="image/*"
                onChange={handleFileChange}
                />
            </Button>
            <Container>
                <Header3>닉네임</Header3>
                <Header>
                    <NicknameBox 
                    placeholder={userNickname}
                    maxLength="10"  
                    />
                    <EditBtn src={Edit} onChange={onInputHandler}/>
                </Header>
                
                <Count>{userNickname.length}/10</Count>
            </Container>
            <Header>
                <Header3>내 팬덤</Header3>
                <FandomDetail>* 팬덤은 한 번 설정하면 변경할 수 없어요.</FandomDetail>
            </Header>
            <img src={MyFandom} alt="MyFandom" width="61px" height="30px" 
            style={{
                marginLeft: '32px'
            }}/>
            <Header3 style ={{marginTop: '44px'}}>내가 만든 방</Header3>
            <Header style={{gap: '12px', marginLeft: '32px', marginBottom: '36px', cursor: 'pointer'}}>
                <img src={MyFan1} alt="MyFan1"/>
                <img src={MyFan2} alt="MyFan2"/>
                <img src={MyFan3} alt="MyFan3"/>
            </Header>
            <SaveButton src={SaveBtn} alt= "SaveBtn"/>
            </Div>
        </DDiv>
    );
    }

export default MyPage;