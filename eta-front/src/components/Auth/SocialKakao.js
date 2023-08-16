import KakaoLogin from "react-kakao-login";
import KakaoBtn from "../../asset/img/Button_Kakao.svg";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";

const SocialKakao = () => {
  const kakaoClientId = "ba617b53baedf0e8b925ac1a656635a3";
  const navigate = useNavigate();

  const KakaoOnSuccess = async (data) => {
    console.log(data);
    sessionStorage.setItem("userKakaoId", data.profile.id);
    sessionStorage.setItem("kakaoAccessToken", data.response.access_token);
    const loginData = {
      userKakaoId: data.profile.id,
      kakaoAccessToken: data.response.access_token,
    };

    // 로그인 성공 시 SignupPage 페이지로 이동
    try {
      const response = await axios.post(
        "http://3.34.188.69:8080/api/user/signIn",
        loginData
      );

      if (response.data.message === "Sign In Success") {
        navigate("../");
        console.log("Server Response:", response.data);
      } else {
        navigate("../Signup");
      }
    } catch (error) {
      console.error("Error sending login data:", error);
    }
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={KakaoOnSuccess}
        onFail={kakaoOnFailure}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            style={{
              display: "flex",
              border: "none",
              cursor: "pointer",
              width: "327px",
              height: "48px",
              bottom: "80px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              justifyContent: "center",
            }}
          >
            <img src={KakaoBtn} alt="KakaoBtn" />
          </button>
        )}
      />
    </>
  );
};

export default SocialKakao;
