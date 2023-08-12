import KakaoLogin from "react-kakao-login";
import KakaoBtn from "../../asset/img/Button_Kakao.png";
import React from "react";
import { useNavigate } from "react-router-dom"; 

const SocialKakao =()=>{

    const kakaoClientId = 'ba617b53baedf0e8b925ac1a656635a3';
    const history = useNavigate(); 

    const kakaoOnSuccess = async (data)=>{
      	console.log(data)
        //const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
        // 로그인 성공 시 SignupPage 페이지로 이동
        history("/Signup");
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return(
        <>
          <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
              render={({ onClick }) => (
                <button onClick={onClick} 
                        style={{ 
                            display: 'flex',
                            border: 'none', 
                            cursor: 'pointer', 
                            width: '327px', 
                            height: '48px',
                            bottom: '80px',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            justifyContent: 'center',
                        }}>
                    <img src={KakaoBtn} alt="KakaoBtn" />
                </button>
                )}
          />
        </>
    )
}

export default SocialKakao
