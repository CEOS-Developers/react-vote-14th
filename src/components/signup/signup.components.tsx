import { Input, Spacer, Radio, Button, useInput } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import "./signup.components.css";

function Signup() {
  return (
    <>
      <div className="Title">
        <h2>회원가입</h2>
      </div>
      <div className="Container">
        <Input placeholder="이름" />
        <Spacer y={1.5} />
        <Input placeholder="아이디" />
        <Spacer y={1.5} />
        <Input placeholder="이메일" />
        <Spacer y={1.5} />
        <Input.Password placeholder="비밀번호" />
        <Spacer y={1.5} />
        <Button auto ghost>
          회원가입
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>이미 계정이 있으신가요?</p>
        <p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            로그인하기
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
