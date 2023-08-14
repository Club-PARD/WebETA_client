import styled from "styled-components";
import Logo from "../asset/img/Logo.png";
import { Link } from "react-router-dom";
import { content, useTabs } from "../components/useTabs";

function HomePage() {
  const HomePageComponent = styled.div`
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

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <HomePageComponent>
      <Row>
        <img src={Logo} alt="EveryFandom Logo" />
        <Link to={`/Login`}>
          <LoginButton>로그인</LoginButton>
        </Link>
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
      <div style={{ marginTop: "32px", width: "100%" }}>
        {currentItem.content}
      </div>
    </HomePageComponent>
  );
}

export default HomePage;
