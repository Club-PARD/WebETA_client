import { styled } from "styled-components";
import join from "../../asset/img/Button_Join.svg";
import rank17 from "../../asset/img/Rank_Seventeen.png";
import up from "../../asset/img/up.svg";
import fandom17 from "../../asset/img/FandomList_Seventeen.png";
import fandom17_1 from "../../asset/img/MyFandomList_Seventeen1.png";
import fandom17_2 from "../../asset/img/MyFandomList_Seventeen2.png";
import fandom17_3 from "../../asset/img/MyFandomList_Seventeen3.png";
import { Link } from "react-router-dom";

const data = [
  {
    image: `url(${fandom17})`,
    tag: "조공",
    member: 982,
    title: "세븐틴 조공방",
    decription: "콘서트 조공하실 분 들어오세요~",
  },
  {
    image: `url(${fandom17_1})`,
    tag: "조공",
    member: 32,
    title: "셉틴 서울콘 서포트",
    decription:
      "7월 22일 서울 콘서트 스태프 간식 서포트 하려고 합니다. 최소 금액 제한 없으니 편하게 들어오세요!",
  },
  {
    image: `url(${fandom17_2})`,
    tag: "기부",
    member: 1255,
    title: "일본 진출 기념 기부",
    decription:
      "드디어 일본 진출한 우리 셉틴이들~ 기념으로 기부하려고 합니다! 소액이라도 와서 같이 해요~",
  },
  {
    image: `url(${fandom17_3})`,
    tag: "모임",
    member: 6,
    title: "쿱스 시사회 같이 가요",
    decription:
      "인천 시사회 8/19(토) 오후 7시에 있어요! 쿱스 보러 같이 가실 분~",
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

const Div = styled.div`
  width: 375px;
  height: 16px;
  background-color: var(--gray-10, #f8f9fa);
  margin: 0 -24px;
`;

const CreateButton = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: var(--purple-100, #5639a6);
  background-color: transparent;
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
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
  white-space: nowrap;
`;

const AfterHome = () => {
  return (
    <div>
      <FandomRank>
        <Row style={{ justifyContent: "space-between" }}>
          <Title>내 팬덤 랭킹</Title>
          <Link to={`/FandomRanking`}>
            <img src={join} alt="Join Button" />
          </Link>
        </Row>
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
      </FandomRank>
      <Div style={{ marginTop: "32px" }} />
      <Row style={{ justifyContent: "space-between", marginTop: "24px" }}>
        <Title>
          <span style={{ color: `var(--purple-100, #5639a6)` }}>세븐틴</span>{" "}
          팬덤방
        </Title>
        <CreateButton>+ 방 만들기</CreateButton>
      </Row>
      <FandomList>
        {data.map((room, index) => (
          <Link
            to={`/FandomRoom/${index}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <FandomCard style={{ backgroundImage: `${room.image}` }}>
              <Gradient />
              <Tag>{room.tag}</Tag>
              <Member>{room.member}명 참여중</Member>
              <RoomTitle>{room.title}</RoomTitle>
              <Description>{room.decription}</Description>
            </FandomCard>
          </Link>
        ))}
      </FandomList>
    </div>
  );
};

export default AfterHome;
export { data };
