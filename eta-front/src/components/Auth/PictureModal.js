import styled from "styled-components";
import Icon_Camera from "../../asset/img/Icon_Camera.svg";
import CloseButton from "../../asset/img/CloseBtn.svg";
import ButtonNo from "../../asset/img/Button_No.svg";
import ButtonYes from "../../asset/img/Button_Yes.svg";
import React, { useState } from "react";
import axios from "axios";

const ImageModal = styled.div`
  width: 343px;
  height: 300px;
  border-radius: 10px;
  background: #ffffff;
`;
const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-top: 24px;
  margin-left: 295px;
  background: url(${CloseButton}) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`;
const Camera = styled.img`
  width: 48px;
  height: 48px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
const Header4 = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 24px;
  text-align: center;
`;
const Body4 = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #ababab;
  margin-bottom: 40px;
`;
const NoBtn = styled.button`
  margin-left: 40px;
  margin-right: 24px;
  width: 120px;
  height: 40px;
  background: url(${ButtonNo}) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const YesBtn = styled.label`
  margin-right: 39px;
  width: 120px;
  height: 40px;
  background: url(${ButtonYes}) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  display: inline-block;
`;

const FileInput = styled.input`
  display: none;
`;

function PictureModal({ onClose, onNoClick }) {
  const [userImage, setUserImage] = useState(null);

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
      const response = await axios.post("http://3.34.188.69:8080/api/user/signUp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image upload success:", response.status);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <ImageModal>
      <CloseBtn src={CloseButton} alt="Close" onClick={onNoClick} />
      <Camera src={Icon_Camera} alt="Icon_Camera" />
      <Header4>모든 사진 접근을 허용해주세요</Header4>
      <Body4>
        방 만들기나 프로필 사진을
        <br />
        쉽고 편하게 올릴 수 있어요.
      </Body4>
      <NoBtn onClick={onNoClick} />
      <YesBtn onClick={handlePhotoUpload}>
        <FileInput
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
        />
      </YesBtn>
    </ImageModal>
  );
}
export default PictureModal;
