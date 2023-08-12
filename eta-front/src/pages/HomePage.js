import styled from "styled-components";
import FandomRanking from "../components/Fandom/FandomRanking";
import FandomRooms from "../components/Fandom/FandomRooms";
import MyPage from "../components/Profile/MyPage";


function HomePage() {
    const HomePageComponent = styled.div`
    width: 572px;
    height: 812px;
    `;
    return (
        <HomePageComponent>
            <FandomRanking/>
            <FandomRooms/>
            <MyPage/>
        </HomePageComponent>
        
    );
    }

export default HomePage;