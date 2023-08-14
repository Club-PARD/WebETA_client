import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import back from "../../asset/img/Back.svg";
import up from "../../asset/img/up.svg";
import down from "../../asset/img/down.svg";
import rank17 from "../../asset/img/Rank_Seventeen.png";
import rankEXO from "../../asset/img/Rank_EXO.png";
import rankBTS from "../../asset/img/Rank_BTS.png";
import rankIU from "../../asset/img/Rank_IU.png";
import rankIVE from "../../asset/img/Rank_IVE.png";
import rankNJ from "../../asset/img/Rank_NewJeans.png";
import voteEnabled from "../../asset/img/Vote_Enabled.svg";
import voteDisabled from "../../asset/img/Vote_Disabled.svg";

const RankingPageComponent = styled.div`
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  position: relative;
  display: inline-block;
  font-weight: bold;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    left: -3px;
    bottom: -3px; /* 밑줄 위치 조절 */
    width: 105%;
    border-bottom: 12px solid var(--purple-10, #eeebf6); /* 밑줄 스타일 및 두께 조절 */
    z-index: -1;
  }
`;

const Hr = styled.hr`
  border: 1px solid #eeebf6;
  width: 100%;
  margin: 12px 0;
`;

const VoteEnabled = styled.img`
  margin-left: 8px;
  border-radius: 8px;

  ${(props) =>
    props.isClicked &&
    `box-shadow: 0px 0px 21.33333396911621px 2.6666667461395264px rgba(86, 57, 166, 0.10);`}
`;

function FandomRanking() {
  const [isClicked, setIsClicked] = useState(false);
  const [voteCount, setVoteCount] = useState(12879);

  const onClickDownVote = () => {
    setIsClicked(true);
  };

  const onClickUpVote = () => {
    setVoteCount((prev) => prev + 1);
    setIsClicked(false);
  };

  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <RankingPageComponent>
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
        <span style={{ fontSize: "18px", fontWeight: "700" }}>팬덤 랭킹</span>
        <div />
      </Row>
      <Column style={{ marginTop: "32px", alignItems: "start", width: "100%" }}>
        <Row>
          <Title
            style={{
              color: `var(--purple-100, #5639A6)`,
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            내가 응원하는 팬덤
          </Title>
          <span
            style={{
              color: `var(--purple-50, #BEB5D8)`,
              fontSize: "18px",
              fontWeight: "600",
              zIndex: "0",
            }}
          >
            을 눌러
          </span>
        </Row>
        <span
          style={{
            color: `var(--purple-50, #BEB5D8)`,
            fontSize: "18px",
            fontWeight: "600",
            marginTop: "5px",
          }}
        >
          랭킹을 올려보세요!
        </span>
        <Row style={{ marginTop: "12px" }}>
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
          <img
            src={voteDisabled}
            alt="Vote Disabled"
            style={{ marginLeft: "8px" }}
          />
        </Row>
        <Hr />
        <Row>
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
            {numberWithCommas(voteCount)}회
          </span>
          <VoteEnabled
            src={voteEnabled}
            alt="Vote Enabled"
            onTouchStart={onClickDownVote}
            onTouchEnd={onClickUpVote}
            onMouseDown={onClickDownVote}
            onMouseUp={onClickUpVote}
            isClicked={isClicked}
          />
        </Row>
        <Hr />
        <Row>
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
          <img
            src={voteDisabled}
            alt="Vote Disabled"
            style={{ marginLeft: "8px" }}
          />
        </Row>
        <Hr />
        <Row>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>4</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              -
            </div>
          </Column>
          <img
            src={rankNJ}
            alt="NewJeans Profile"
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
            뉴진스
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            375회
          </span>
          <img
            src={voteDisabled}
            alt="Vote Disabled"
            style={{ marginLeft: "8px" }}
          />
        </Row>
        <Hr />
        <Row>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>5</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              -
            </div>
          </Column>
          <img
            src={rankIU}
            alt="IU Profile"
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
            아이유
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            94회
          </span>
          <img
            src={voteDisabled}
            alt="Vote Disabled"
            style={{ marginLeft: "8px" }}
          />
        </Row>
        <Hr />
        <Row>
          <Column>
            <div style={{ fontSize: "24px", fontWeight: "600" }}>6</div>
            <div
              style={{
                color: "var(--gray-30, #ABABAB)",
                fontWeight: "500",
                fontSize: "12px",
              }}
            >
              -
            </div>
          </Column>
          <img
            src={rankIVE}
            alt="IVE Profile"
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
            아이브
          </span>
          <span
            style={{
              color: "var(--gray-30, #ABABAB)",
              textAlign: "right",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            8회
          </span>
          <img
            src={voteDisabled}
            alt="Vote Disabled"
            style={{ marginLeft: "8px" }}
          />
        </Row>
        <Hr />
        <Row style={{ justifyContent: "flex-end" }}>
          <div
            style={{
              color: `var(--gray-30, #ABABAB)`,
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            * 랭킹은 매달 1일 초기화 됩니다.
          </div>
        </Row>
      </Column>
    </RankingPageComponent>
  );
}

export default FandomRanking;
