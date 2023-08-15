import React, { useEffect } from "react";
import { styled } from "styled-components";
import back from "../../asset/img/Back.svg";
import button_enter from "../../asset/img/Button_Enter.svg";
import { Link, useParams } from "react-router-dom";
import { data } from "../Home/AfterHome";
import axios from "axios";

const RoomDetailPageComponent = styled.div`
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
  width: 156px;
  height: 200px;
  background-size: cover;
  background-position: center center;
  border-radius: 11px;
`;

const Tag = styled.div`
  padding: 3px 6px;
  border-radius: 14px;
  background: var(--purple-100, #5639a6);
  border: 1px solid var(--purple-100, #5639a6);
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

const Member = styled.div`
  padding: 3px 6px;
  border-radius: 14px;
  background: transparent;
  color: var(--purple-100, #5639a6);
  border: 1px solid var(--purple-100, #5639a6);
  font-size: 12px;
  font-weight: 600;
`;

function FandomRoomDetail() {
  const { index } = useParams();

  useEffect(() => {
    const header = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    axios
      .get(`http://3.34.188.69:8080/api/board/oneList/${index}`, {
        headers: header,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, [index]);

  return (
    <RoomDetailPageComponent>
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
        <span style={{ fontSize: "18px", fontWeight: "700" }}>팬덤방</span>
        <div />
      </Row>
      <FandomCard
        style={{ backgroundImage: `${data[index].image}`, marginTop: "22px" }}
      />
      <Column>
        <Row style={{ marginTop: "22px", gap: "4px" }}>
          <Tag>{data[index].tag}</Tag>
          <Member>{data[index].member}명 참여중</Member>
        </Row>
        <span
          style={{ marginTop: "12px", fontSize: "18px", fontWeight: "700" }}
        >
          {data[index].title}
        </span>
        <span style={{ marginTop: "8px", fontSize: "14px", fontWeight: "500" }}>
          {data[index].decription}
        </span>
      </Column>
      <img
        src={button_enter}
        alt="Enter Button"
        style={{ marginTop: "40px" }}
      />
    </RoomDetailPageComponent>
  );
}

export default FandomRoomDetail;
