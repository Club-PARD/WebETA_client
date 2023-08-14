import { styled } from "styled-components";
import join from "../../asset/img/Button_Join.svg";
import rankBTS from "../../asset/img/Rank_BTS.png";
import close from "../../asset/img/Close.svg";
import modalLogo from "../../asset/img/Modal_Logo.svg";
import up from "../../asset/img/up.svg";
import down from "../../asset/img/down.svg";
import rank17 from "../../asset/img/Rank_Seventeen.png";
import rankEXO from "../../asset/img/Rank_EXO.png";
import fandomEXO from "../../asset/img/FandomList_EXO.png";
import fandom17 from "../../asset/img/FandomList_Seventeen.png";
import fandomIU from "../../asset/img/FandomList_IU.png";
import fandomNJ from "../../asset/img/FandomList_NewJeans.png";
import fandomBTS from "../../asset/img/FandomList_BTS.png";
import fandomIVE from "../../asset/img/FandomList_IVE.png";
import modal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FandomRank = styled.div`
  border-radius: 10px;
  background: var(--white-100, #fff);
  box-shadow: 0px 0px 16px 2px rgba(86, 57, 166, 0.1);
  padding: 16px;
  z-index: -2;
`;

const Title = styled.span`
  position: relative;
  display: inline-block;
  font-weight: bold;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    left: -1px;
    bottom: -3px; /* 밑줄 위치 조절 */
    width: 105%;
    border-bottom: 12px solid var(--purple-10, #eeebf6); /* 밑줄 스타일 및 두께 조절 */
    z-index: -1;
  }
`;

const Hr = styled.hr`
  border: 1px solid #eeebf6;
  width: 100%;
`;

const Div = styled.div`
  width: 375px;
  height: 16px;
  background-color: var(--gray-10, #f8f9fa);
  margin: 32px -24px 0 0;
`;

const FandomList = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const FandomCard = styled.div`
  position: relative;
  width: 156px;
  height: 200px;
  background-size: cover;
  background-position: center center;
  border-radius: 11px;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(245, 243, 250, 0) 0%,
    #f5f3fa 81.43%
  );
`;

const Tag = styled.div`
  position: absolute;
  top: 128px;
  left: 12px;
  padding: 3px 6px;
  border-radius: 10px;
  background: var(--purple-100, #5639a6);
  border: 1px solid var(--purple-100, #5639a6);
  color: white;
  font-size: 9px;
  font-weight: 600;
`;

const Member = styled.div`
  position: absolute;
  top: 128px;
  left: 45px;
  padding: 3px 6px;
  border-radius: 10px;
  background: transparent;
  color: var(--purple-100, #5639a6);
  border: 1px solid var(--purple-100, #5639a6);
  font-size: 9px;
  font-weight: 600;
`;

const RoomTitle = styled.div`
  position: absolute;
  top: 152px;
  left: 12px;
  font-size: 14px;
  font-weight: 700;
`;

const Description = styled.div`
  position: absolute;
  top: 174px;
  left: 12px;
  font-size: 12px;
  font-weight: 500;
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

const BeforeHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FandomRank>
        <Row style={{ justifyContent: "space-between" }}>
          <Title>🏆 팬덤 랭킹</Title>
          <img src={join} alt="Join Button" onClick={openModal} />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
          >
            <Row style={{ justifyContent: "flex-end" }}>
              <img src={close} alt="close button" onClick={closeModal} />
            </Row>
            <Column>
              <img src={modalLogo} alt="close button" />
              <div
                style={{
                  marginTop: "16px",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                더 이용하고 싶으신가요?
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
                간편하게 로그인 하고,
                <br />
                팬덤 활동을 이어가 보세요!
              </div>
            </Column>
            <ButtonBar>
              <ModalButton
                style={{
                  color: `var(--gray-30, #ABABAB)`,
                  backgroundColor: `var(--gray-20, #F5F5F5)`,
                }}
                onClick={closeModal}
              >
                취소
              </ModalButton>
              <Link to={`/Login`}>
                <ModalButton onClick={closeModal}>로그인</ModalButton>
              </Link>
            </ButtonBar>
          </Modal>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>1</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "700",
                fontSize: "12px",
              }}
            >
              -
            </div>
          </Column>
          <img
            src={rankBTS}
            alt="BTS Profile"
            width="44px"
            height="44px"
            style={{ borderRadius: "50%", marginLeft: "22px" }}
          />
          <span
            style={{
              flexGrow: 1,
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "10px",
            }}
          >
            방탄소년단
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            17,432회
          </span>
        </Row>
        <Hr />
        <Row style={{ marginTop: "15px" }}>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>2</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              <img src={up} alt="up" />1
            </div>
          </Column>
          <img
            src={rank17}
            alt="Seventeen Profile"
            width="44px"
            height="44px"
            style={{ borderRadius: "50%", marginLeft: "22px" }}
          />
          <span
            style={{
              flexGrow: 1,
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "10px",
            }}
          >
            세븐틴
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            12,879회
          </span>
        </Row>
        <Hr />
        <Row style={{ marginTop: "15px" }}>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>3</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              <img src={down} alt="down" />1
            </div>
          </Column>
          <img
            src={rankEXO}
            alt="Seventeen Profile"
            width="44px"
            height="44px"
            style={{ borderRadius: "50%", marginLeft: "22px" }}
          />
          <span
            style={{
              flexGrow: 1,
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "10px",
            }}
          >
            엑소
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            9,473회
          </span>
        </Row>
      </FandomRank>
      <Div />
      <Title style={{ marginTop: "24px" }}>💬 전체 팬덤방</Title>
      <FandomList>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandomEXO})` }}
        >
          <Gradient />
          <Tag>봉사</Tag>
          <Member>2793명 참여중</Member>
          <RoomTitle>엑소엘 봉사 모임</RoomTitle>
          <Description>유기견 봉사가실 분 모집합...</Description>
        </FandomCard>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandom17})` }}
        >
          <Gradient />
          <Tag>조공</Tag>
          <Member>982명 참여중</Member>
          <RoomTitle>세븐틴 조공방</RoomTitle>
          <Description>콘서트 조공하실 분 들어오...</Description>
        </FandomCard>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandomIU})` }}
        >
          <Gradient />
          <Tag>조공</Tag>
          <Member>766명 참여중</Member>
          <RoomTitle>아이유 생일 조공</RoomTitle>
          <Description>곧 생일 기념으로 촬영장...</Description>
        </FandomCard>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandomNJ})` }}
        >
          <Gradient />
          <Tag>조공</Tag>
          <Member>327명 참여중</Member>
          <RoomTitle>뉴진스 커피차</RoomTitle>
          <Description>뮤비 스태프들 서포트해요...</Description>
        </FandomCard>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandomBTS})` }}
        >
          <Gradient />
          <Tag>기부</Tag>
          <Member>25명 참여중</Member>
          <RoomTitle>BTS 기부방</RoomTitle>
          <Description>이번 수해지역 기부를 할까...</Description>
        </FandomCard>
        <FandomCard
          onClick={openModal}
          style={{ backgroundImage: `url(${fandomIVE})` }}
        >
          <Gradient />
          <Tag>모임</Tag>
          <Member>1명 참여중</Member>
          <RoomTitle>수원 줌마팬 모임</RoomTitle>
          <Description>수원 사시는 아이브 줌마팬...</Description>
        </FandomCard>
      </FandomList>
    </div>
  );
};

export default BeforeHome;
