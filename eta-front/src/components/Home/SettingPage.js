import styled from "styled-components";
import logo from "../../asset/img/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useTabs } from "../../components/Home/useTabs";
import profile from "../../asset/img/Profile.svg";
import AfterHome from "../../components/Home/AfterHome";
import AfterCommunity from "../../components/Home/AfterCommunity";

function SettingPage() {
  const HomePageComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 375px;
    padding: 32px 24px;
    margin: 0 auto;
    overflow: hidden;
  `;

  const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  `;

  const LoginButton = styled.button`
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid var(--purple-100, #5639a6);
    background: var(--purple-10, #eeebf6);
    color: var(--purple-100, #5639a6);
    font-weight: bold;
    cursor: pointer;
  `;

  const NoSelectTab = styled.button`
    cursor: pointer;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid transparent;
    color: #ababab;
    width: 50%;
    padding: 10px 50px;
    background-color: transparent;
  `;

  const SelectTab = styled.button`
    font-weight: bold;
    border: none;
    border-bottom: 2px solid var(--purple-100, #5639a6);
    color: var(--purple-100, #5639a6);
    width: 50%;
    padding: 10px 50px;
    background-color: transparent;
  `;

  const Profile = styled.span`
    position: relative;
    display: inline-block;
    font-weight: bold;
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -3px; /* 밑줄 위치 조절 */
      width: 110%;
      border-bottom: 12px solid var(--purple-10, #eeebf6); /* 밑줄 스타일 및 두께 조절 */
      z-index: -1;
    }
  `;

  const userId = { userKakaoId: localStorage.getItem("userKakaoId") };
  const navigate = useNavigate();

  const content = [
    {
      tab: "홈",
      content: <AfterHome />,
    },
    {
      tab: "커뮤니티",
      content: <AfterCommunity />,
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <HomePageComponent>
      <Row>
        <img src={logo} alt="EveryFandom Logo" />
        
          <Profile>
            <Row>
              <img src={profile} alt="Profile" />
              <button
                style={{
                  color: `var(--purple-100, #5639A6)`,
                  marginLeft: "4px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                onClick={() => navigate("/MyPage")}
              >
                {/* {userKakaoNickname} */}
                조슈아가 나라다
              </button>
              <span
                style={{
                  color: `var(--gray-30, #ABABAB)`,
                  marginLeft: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {" "}
                님
              </span>
            </Row>
          </Profile>
        
      </Row>
      <Row style={{ marginTop: "6px" }}>
        {content.map((section, index) =>
          currentItem === section ? (
            <SelectTab onClick={() => changeItem(index)}>
              {section.tab}
            </SelectTab>
          ) : (
            <NoSelectTab onClick={() => changeItem(index)}>
              {section.tab}
            </NoSelectTab>
          )
        )}
      </Row>
      <div style={{ marginTop: "24px", width: "100%" }}>
        {currentItem.content}
      </div>
    </HomePageComponent>
  );
}

export default SettingPage;