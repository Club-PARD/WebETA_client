import styled from "styled-components";
import FandomRanking from "../components/Fandom/FandomRanking";
import FandomRooms from "../components/Fandom/FandomRooms";
import MyPage from "../components/Profile/MyPage";
import Logo from "../asset/img/Logo.png";

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
  `;

  return (
    <HomePageComponent>
      <Row>
        <img src={Logo} />
        <LoginButton>로그인</LoginButton>
      </Row>
      <Login />
      <MyPage />
      <FandomRanking />
      <FandomRooms />
    </HomePageComponent>
  );
}

export default HomePage;
