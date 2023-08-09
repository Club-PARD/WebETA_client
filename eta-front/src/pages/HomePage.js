import styled from "styled-components";
import Login from "../components/Auth/Login";
import FandomRanking from "../components/Fandom/FandomRanking";
import FandomRooms from "../components/Fandom/FandomRooms";
import MyPage from "../components/Profile/MyPage";

function HomePage() {
    const HomePageComponent = styled.div`
    `;
    return (
        <HomePageComponent>
            <Login />
            <MyPage />
            <FandomRanking /> 
            <FandomRooms /> 
        </HomePageComponent>
        
    );
    }

export default HomePage;