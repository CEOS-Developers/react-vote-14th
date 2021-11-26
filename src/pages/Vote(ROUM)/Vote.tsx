import React from "react";
import { useNavigate } from "react-router-dom";
import { CssBaseline } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { Logo, VoteBox, ButtonBox } from "./VotePresenter";

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <ButtonBox>
        <Button onClick={handleLoginClick} auto color="primary" rounded flat>
          로그인 하러가기
        </Button>
      </ButtonBox>
      <Logo
        alt=""
        src="https://static.wixstatic.com/media/982853_0a088a0f99374ddd85634253179a8a43~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/982853_0a088a0f99374ddd85634253179a8a43~mv2.jpeg"
      />

      <VoteBox>
        <Radio.Group value="1">
          <Radio value="1">
            후보1
            <Radio.Description>Description for Option1</Radio.Description>
          </Radio>
          <Radio value="2">
            후보2<Radio.Desc>Description for Option2</Radio.Desc>
          </Radio>
          <Radio value="3">
            후보3<Radio.Desc>Description for Option2</Radio.Desc>
          </Radio>
        </Radio.Group>
      </VoteBox>
    </>
  );
};

export default Vote;
