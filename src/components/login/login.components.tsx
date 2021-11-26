import { Input, Spacer, Radio, Button, useInput } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="Title">
        <h2>로그인</h2>
      </div>
      <div className="Container">
        <Input placeholder="아이디" />
        <Spacer y={1.5} />
        <Input.Password placeholder="비밀번호" />
        <Spacer y={1.5} />
        <Button auto ghost>
          로그인
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "0" }}>계정이 없으신가요?</p>
        <p style={{ marginTop: "0" }}>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
          >
            회원가입하기
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
