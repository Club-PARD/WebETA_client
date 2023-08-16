import { styled } from "styled-components";
import write from "../../asset/img/Button_Write.svg";
import CommBTS from "../../asset/img/Comm_BTS.png";
import Comm17 from "../../asset/img/Comm_Seventeen.png";
import CommIU from "../../asset/img/Comm_IU.png";
import CommNJ from "../../asset/img/Comm_NewJeans.png";
import comment from "../../asset/img/basil_comment-outline.svg";
import heart from "../../asset/img/ph_heart.svg";
import searchIcon from "../../asset/img/fe_search.svg";
import close from "../../asset/img/Close.svg";
import modalLogo from "../../asset/img/Modal_Logo.svg";
import modal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    fandom: "방탄소년단",
    title: "아미들 김장 봉사",
    timestamp: "1시간 전",
    image: `${CommBTS}`,
    description:
      "저희 아미들 김장 봉사 다녀왔어요 ~^^ 매년 춘천 하나의 마을에서 봉사를 진행하는데, 일손이 부족하다고 하니 많이 관심 가져주세요~ 다들 추운 겨울 잘 나시길 ㅎㅎㅎ",
    comment: 1,
    heart: 12,
  },
  {
    fandom: "세븐틴",
    title: "데뷔 7주년 기부",
    timestamp: "21시간 전",
    image: `${Comm17}`,
    description:
      "세봉이들이 어느덧.... 데뷔 7주년을 맞았네요. 감격스럽습니다.... 저희 팬들이 마음을 모아 기부를 진행했어요... 좋은 하루 보내세요 ^^",
    comment: 29,
    heart: 247,
  },
  {
    fandom: "아이유",
    title: "유스케 조공 소식 나눠요~",
    timestamp: "2일 전",
    image: `${CommIU}`,
    description:
      "자랑스러운 우리 지은이 ㅎㅎㅎ 유스케 벌써 5번째 출연이네요. 이번에는 저희 4050 유애나가 직접 만든 수제 샌드위치로 조공을 진행했답니다~~~~ 인증샷까지 올려주어 얼마나 뿌듯한지...",
    comment: 90,
    heart: 57,
  },
  {
    fandom: "뉴진스",
    title: "뉴깅이들 롤라팔루자 공연",
    timestamp: "15일 전",
    image: `${CommNJ}`,
    description:
      "뉴깅이드류ㅠㅠㅠㅠ 미국 대형 음악 축제 롤라팔루자에서 공연을 하는 날이 오다니.. 너무 자랑스러워요.. 현장에서 보신 분들 계실까요??",
    comment: 1,
    heart: 12,
  },
];

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

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px 8px 8px 30px;
  border-radius: 8px;
  background: var(--gray-20, #f5f5f5);
  background-image: url(${searchIcon});
  background-position: 8px center;
  background-repeat: no-repeat;
  border: none;
  font-size: 14px;
  font-weight: 600;
`;

const Hr = styled.hr`
  margin: 12px 0 0 0;
  width: calc(100% + 48px);
  border: 1px solid var(--gray-10, #f8f9fa);
`;

const FandomTag = styled.div`
  border-radius: 8px;
  background: var(--purple-10, #eeebf6);
  padding: 4px 8px;
  color: var(--purple-100, #5639a6);
  font-size: 9px;
  font-weight: 600;
`;

const CommImg = styled.img`
  width: 160px;
  height: 96px;
  border-radius: 8px;
`;

const Div = styled.div`
  width: 375px;
  height: 16px;
  background-color: var(--gray-10, #f8f9fa);
  margin: 12px 0 0 -24px;
`;

const Modal = styled(modal)`
  display: flex;
  flex-direction: column;
  width: 343px;
  border-radius: 10px;
  background-color: #fff;
  margin: 15% auto;
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

const BeforeCommunity = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onchangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Column>
      <Row style={{ gap: "4px" }}>
        <SearchInput
          type="text"
          placeholder="검색"
          value={search}
          onChange={onchangeSearch}
        />
        <img src={write} alt="Write Button" />
      </Row>
      <Hr />
      {data.map(
        (community) =>
          community.title.includes(search) && (
            <>
              <div style={{ width: "100%" }} onClick={openModal}>
                <Row style={{ marginTop: "24px" }}>
                  <FandomTag>{community.fandom}</FandomTag>
                  <div
                    style={{
                      marginLeft: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      flexGrow: "1",
                    }}
                  >
                    {community.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: `var(--gray-30, #ABABAB)`,
                    }}
                  >
                    {community.timestamp}
                  </div>
                </Row>
                <Row style={{ marginTop: "16px" }}>
                  <CommImg src={community.image} alt="Community Introduce" />
                  <div
                    style={{
                      marginLeft: "12px",
                      fontSize: "12px",
                      fontWeight: " 500",
                      width: "155px",
                    }}
                  >
                    {community.description}
                  </div>
                </Row>
                <Row style={{ marginTop: "4px", justifyContent: "flex-end" }}>
                  <img src={comment} alt="Comment Icon" />
                  <span
                    style={{
                      color: `var(--gray-30, #ABABAB)`,
                      fontSize: "10px",
                      fontWeight: "600",
                      marginRight: "4px",
                    }}
                  >
                    {community.comment}
                  </span>
                  <img src={heart} alt="Heart Icon" />
                  <span
                    style={{
                      color: `var(--gray-30, #ABABAB)`,
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {community.heart}
                  </span>
                </Row>
                <Div />
              </div>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" } }}
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
            </>
          )
      )}
    </Column>
  );
};

export default BeforeCommunity;
