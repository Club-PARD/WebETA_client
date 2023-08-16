import { styled } from "styled-components";
import join from "../../asset/img/Button_Join.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { rank, list } from "../data";

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
  margin: 32px 0 0 -24px;
`;

const CreateButton = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: var(--purple-100, #5639a6);
  background-color: transparent;
  cursor: pointer;
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
  const [boardList, setBoardList] = useState([]);
  
  useEffect(() => {
    const header = {
      Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTIxNTMwNzAsImV4cCI6MTY5MjE1NjY3MH0.LCssow-iqEYL-G4XJb_OOqRs_tFej_pGnC_y-9HuSwTDqS4A5BlF_fCt-J6cQjMcEHQsG2DO8uEiHZTuULk4WA",
      "Content-Type": "application/json",
    };
    axios
      .get("http://3.34.188.69:8080/api/board/loginList/세븐틴 ", {
        headers: header,
      })
      .then((response) => {
        setBoardList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <div style={{ fontSize: "24px", fontWeight: "600" }}>
              {rank[1].ranking}
            </div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              {rank[1].rising}
            </div>
          </Column>
          <img
            src={rank[1].image}
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
            {rank[1].fanclub}
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {rank[1].count.toLocaleString()}회
          </span>
        </Row>
      </FandomRank>
      <Div />
      <Row style={{ justifyContent: "space-between", marginTop: "24px" }}>
        <Title>
          <span style={{ color: `var(--purple-100, #5639a6)` }}>세븐틴</span>{" "}
          팬덤방
        </Title>
        <Link to={`/MakeRoom`}>
          <CreateButton>+ 방 만들기</CreateButton>
        </Link>
      </Row>
      <FandomList>
        {boardList.map((board, index) => (
          <Link
            to={`/FandomRoom/${board.boardNumber}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <FandomCard style={{ backgroundImage: `${list[index]}` }}>
              <Gradient />
              <Tag>{board.boardCategory}</Tag>
              <Member>{board.boardClick}명 참여중</Member>
              <RoomTitle>{board.boardTitle}</RoomTitle>
              <Description>{board.boardDescription}</Description>
            </FandomCard>
          </Link>
        ))}
      </FandomList>
    </div>
  );
};

export default AfterHome;
