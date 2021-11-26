import React from "react";
import { useNavigate } from "react-router-dom";
import { CssBaseline } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Modal } from "@nextui-org/react";
import { Text } from "@nextui-org/react";

import {
  Wrapper,
  Logo,
  VoteBox,
  LoginBox,
  VoteButtonBox,
} from "./VotePresenter";

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Wrapper>
      <LoginBox>
        <Button
          onClick={handleLoginClick}
          size="small"
          auto
          color="primary"
          rounded
          flat
        >
          로그인 하러가기
        </Button>
      </LoginBox>
      <Logo
        alt="logo"
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
      <VoteButtonBox>
        <Button size="large" color="primary" auto onClick={handler}>
          투표하기
        </Button>
      </VoteButtonBox>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            투표 결과
          </Text>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            취소
          </Button>
          <Button auto onClick={closeHandler}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Vote;
