import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import modal from "react-modal";
import back from "../../asset/img/Back.svg";
import photo from "../../asset/img/Photo.svg";
import check from "../../asset/img/Check.svg";
import close from "../../asset/img/Close.svg";
import modalLogo from "../../asset/img/Icon_Camera.svg";
import disabledButton from "../../asset/img/Button_CreateRoomInactive.svg";
import enabledButton from "../../asset/img/Button_CreateRoom.svg";
import axios from "axios";

const category = ["조공", "모임", "봉사", "기부"];

const CreateRoomPageComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 375px;
  padding: 32px 24px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: start;
`;

const FandomCard = styled.div`
  position: relative;
  width: 117px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  background-color: var(--purple-10, #eeebf6);
  border-radius: 11px;
  margin-top: 24px;
`;

const CameraButton = styled.img`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const RoomTitle = styled.input`
  padding: 15px 16px;
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-30, #ababab);

  &:focus {
    outline: none;
    border-color: var(--purple-100, #5639a6);
  }
`;

const RoomDescription = styled.textarea`
  padding: 15px 16px;
  width: 100%;
  height: 94px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-30, #ababab);
  font-family: Pretendard;
  resize: none;

  &:focus {
    outline: none;
    border-color: var(--purple-100, #5639a6);
  }
`;

const InputLength = styled.div`
  color: var(--gray-30, #ababab);
  font-size: 12px;
  font-weight: 500;
`;

const StyledButtonRadio = styled.button`
  background-color: ${(props) =>
    props.checked ? "var(--purple-100, #5639A6)" : "var(--gray-20, #F5F5F5)"};
  color: ${(props) => (props.checked ? "white" : "var(--gray-30, #ABABAB)")};
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
`;

const Modal = styled(modal)`
  display: flex;
  flex-direction: column;
  width: 343px;
  border-radius: 10px;
  background-color: #fff;
  margin: 30% auto;
  padding: 24px;
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;

const ModalButton = styled.button`
  border-radius: 24px;
  background: var(--purple-100, #5639a6);
  padding: 11px 40px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: none;
`;

function CreateRoom() {
  const [permission, setPermission] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardDescription, setBoardDescription] = useState("");
  const [boardCategory, setBoardCategory] = useState("조공");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (boardTitle === "" || boardDescription === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [boardTitle, boardDescription]);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const onClickPhoto = () => {
    if (permission === false) {
      setIsModalOpen(true);
    } else {
      document.getElementById("fileInput").click();
    }
  };

  const cancelModal = () => {
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setPermission(true);
    document.getElementById("fileInput").click();
    setIsModalOpen(false);
  };

  const handleOptionChange = (option) => {
    setBoardCategory(option);
  };

  const onChangeTitle = (event) => {
    const title = event.target.value;

    if (title.length <= 10) {
      setBoardTitle(title);
    }
  };

  const onChangeDescription = (event) => {
    const description = event.target.value;

    if (description.length <= 80) {
      setBoardDescription(description);
    }
  };

  const onClickCreate = () => {
    const data = {
      boardTitle: boardTitle,
      boardDescription: boardDescription,
      boardCategory: boardCategory,
      boardImage: image,
      boardWriterId: "1234",
      boardWriterEmail: "asdf",
      boardWriterNickname: "asdf",
      boardWriterFanclub: "아이유",
    };
    const header = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    axios
      .post("http://3.34.188.69:8080/api/board/create", data, {
        headers: header,
      })
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        if (!responseData.result) {
          alert("보드 생성에 실패했습니다.");
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CreateRoomPageComponent>
      <Row
        style={{
          justifyContent: "space-between",
          marginTop: "40px",
          paddingRight: "10px",
        }}
      >
        <Link to={`../`}>
          <img src={back} alt="back button" />
        </Link>
        <span style={{ fontSize: "18px", fontWeight: "700" }}>방 만들기</span>
        <div />
      </Row>
      <FandomCard
        onClick={onClickPhoto}
        style={{ backgroundImage: `url(${image})` }}
      >
        <CameraButton src={photo} alt="Camera Button" />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </FandomCard>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={cancelModal}
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
      >
        <Row style={{ justifyContent: "flex-end" }}>
          <img src={close} alt="close button" onClick={cancelModal} />
        </Row>
        <Column style={{ alignItems: "center" }}>
          <img src={modalLogo} alt="close button" />
          <div
            style={{
              marginTop: "16px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            모든 사진 접근을 허용해주세요
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "14px",
              fontWeight: "600",
              color: `var(--gray-30, #ABABAB)`,
              textAlign: "center",
            }}
          >
            방 만들기나 프로필 사진을
            <br />
            쉽고 편하게 올릴 수 있어요.
          </div>
        </Column>
        <ButtonBar>
          <ModalButton
            style={{
              color: `var(--gray-30, #ABABAB)`,
              backgroundColor: `var(--gray-20, #F5F5F5)`,
            }}
            onClick={cancelModal}
          >
            취소
          </ModalButton>
          <ModalButton onClick={closeModal} style={{ padding: "11px 34px" }}>
            접근 허용
          </ModalButton>
        </ButtonBar>
      </Modal>
      <Column style={{ marginTop: "44px", padding: "0 10px" }}>
        <Title>방 이름</Title>
        <RoomTitle
          type="text"
          placeholder="10자 이내로 원하는 방 이름을 적어주세요."
          value={boardTitle}
          onChange={onChangeTitle}
        />
        <Row style={{ justifyContent: "flex-end", marginTop: "4px" }}>
          <InputLength>{boardTitle.length}/10</InputLength>
        </Row>
        <Title style={{ marginTop: "24px" }}>방 설명</Title>
        <RoomDescription
          placeholder="80자 이내로 방 설명을 적어주세요."
          value={boardDescription}
          onChange={onChangeDescription}
        />
        <Row style={{ justifyContent: "flex-end", marginTop: "4px" }}>
          <InputLength>{boardDescription.length}/80</InputLength>
        </Row>
        <Title style={{ marginTop: "24px" }}>카테고리</Title>
        <Row style={{ margin: "10px 0 76px 0", gap: "10px" }}>
          {category.map((item) => (
            <StyledButtonRadio
              checked={boardCategory === item}
              onClick={() => handleOptionChange(item)}
            >
              {boardCategory === item && <img src={check} alt="Check Icon" />}{" "}
              {item}
            </StyledButtonRadio>
          ))}
        </Row>
        {isDisabled ? (
          <img
            src={disabledButton}
            alt="Disabled Button"
            style={{ cursor: "not-allowed" }}
          />
        ) : (
          <img
            src={enabledButton}
            alt="Enabled Button"
            style={{ cursor: "pointer" }}
            onClick={onClickCreate}
          />
        )}
      </Column>
    </CreateRoomPageComponent>
  );
}

export default CreateRoom;
