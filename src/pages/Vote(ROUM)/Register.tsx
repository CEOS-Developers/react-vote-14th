import React, { useState } from "react";

import { Button } from "@nextui-org/react";
import {
  Wrapper,
  Logo,
  LoginBox,
  VoteButtonBox,
  VoteBox,
} from "./VotePresenter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../shared/Cookie";

import axios from "axios";

const Register = () => {
  const userObj: any = useSelector((state: any) => state);
  console.log(userObj);
  const nickname = userObj.nickname;
  const id = userObj.id;
  const [registerID, setRegisterID] = useState<number>(0);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleLogoutClick = () => {
    removeCookie("access");
    removeCookie("refresh");
    alert("로그아웃 되었습니다!");
    navigate(0);
  };

  const handleRegister = () => {
    axios
      .post("http://chatminder.cf/api/polls/candidates", {
        name: nickname,
      })
      .then((response) => {
        console.log(response.data);
        setRegisterID(response.data.id);
        alert("후보로 등록되었습니다. 😉");
      })
      .catch((error) => {
        console.log(error);
        id === 0
          ? alert("로그인이 필요합니다.")
          : alert("이미 등록되었습니다. ");
      });
  };

  const handleCancle = () => {
    console.log(`http://chatminder.cf/api/polls/candidates/${registerID}`);
    axios
      .delete(`http://chatminder.cf/api/polls/candidates/${registerID}`)
      .then((response) => {
        console.log(response.data);
        alert("후보 등록이 취소되었습니다.");
      })
      .catch((error) => {
        console.log(error);
        id === 0
          ? alert("로그인이 필요합니다.")
          : alert("이미 취소되었습니다. ");
      });
  };

  return (
    <Wrapper>
      <LoginBox>
        <>
          <Button
            size="small"
            auto
            color="#A4A4A4"
            rounded
            flat
            onClick={() => navigate("/")}
          >
            투표하러 가기
          </Button>
        </>
        <div>
          {nickname ? (
            <span style={{ color: "grey", marginRight: "1rem" }}>
              {nickname}님, 안녕하세요.
            </span>
          ) : (
            <span style={{ color: "grey", marginRight: "1rem" }}>
              로그인해야 등록할 수 있습니다.
            </span>
          )}
          {nickname ? (
            <Button
              size="small"
              auto
              color="primary"
              rounded
              flat
              onClick={handleLogoutClick}
            >
              로그아웃
            </Button>
          ) : (
            <Button
              size="small"
              auto
              color="primary"
              rounded
              flat
              onClick={handleLoginClick}
            >
              로그인
            </Button>
          )}
        </div>
      </LoginBox>
      <Logo
        alt="logo"
        src="https://static.wixstatic.com/media/982853_0a088a0f99374ddd85634253179a8a43~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/982853_0a088a0f99374ddd85634253179a8a43~mv2.jpeg"
      />
      <VoteBox>
        {nickname ? (
          <>
            {nickname} 님, <br />
            후보 등록을 원하시면 버튼을 눌러주세요.
          </>
        ) : (
          `로그인이 필요합니다.`
        )}
      </VoteBox>
      <VoteButtonBox>
        <Button
          size="large"
          color="#e85186"
          auto
          onClick={() => handleCancle()}
          style={{ marginRight: "2rem" }}
        >
          후보 취소하기
        </Button>
        <Button
          size="large"
          color="primary"
          auto
          onClick={() => handleRegister()}
        >
          후보 등록하기
        </Button>
      </VoteButtonBox>
    </Wrapper>
  );
};

export default Register;
