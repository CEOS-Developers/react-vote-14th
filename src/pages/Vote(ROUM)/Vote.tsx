import React, { useState } from "react";

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
import CandidateList from "./CandidateList";

export interface VoteProps {
  candidates: {
    id: number;
    candidateName: string;
    count: number;
  };
}

// interface RadioEventTarget {
//   checked: boolean;
// }

// interface RadioEvent {
//   target: RadioEventTarget;
//   stopPropagation: () => void;
//   preventDefault: () => void;
//   nativeEvent: React.ChangeEvent;
// }

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const [candidates, setCandidates] = useState<VoteProps["candidates"][]>([
    { id: 0, candidateName: "후보1", count: 2 },
    { id: 1, candidateName: "후보2", count: 3 },
    { id: 2, candidateName: "후보3", count: 1 },
  ]);

  const sortedCandidates = candidates.sort((a, b) => {
    return b.count - a.count;
  });

  // const handleChange = (e: any) => {
  //   setCandidate(e.target.value);
  //   console.log(candidate);
  // };

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  // const HandleCandidate(){
  //   let data =
  // }

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
        {/* <Radio.Group value="1">
          <Radio type="radio" value="1" onChange={(e) => handleChange(e)}>
            후보1
            <Radio.Description>Description for Option1</Radio.Description>
          </Radio>
          <Radio type="radio" value="2" onChange={(e) => handleChange(e)}>
            후보2<Radio.Desc>Description for Option2</Radio.Desc>
          </Radio>
          <Radio type="radio" value="3" onChange={(e) => handleChange(e)}>
            후보3<Radio.Desc>Description for Option2</Radio.Desc>
          </Radio>
        </Radio.Group> */}

        {sortedCandidates.map((candidate) => (
          <CandidateList key={candidate.id} {...candidate} />
        ))}
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
