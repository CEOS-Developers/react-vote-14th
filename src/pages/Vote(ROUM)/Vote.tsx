import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { CssBaseline } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Modal } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Heart } from "react-iconly";

import {
  Wrapper,
  Logo,
  VoteBox,
  LoginBox,
  VoteButtonBox,
  CandidateBox,
} from "./VotePresenter";
import CandidateList from "./CandidateList";

export interface VoteProps {
  candidates: {
    id: number;
    name: string;
    votes: number;
  };
}

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const [candidates, setCandidates] = useState<VoteProps["candidates"][]>([
    { id: 0, name: "후보1", votes: 2 },
    { id: 1, name: "후보2", votes: 3 },
    { id: 2, name: "후보3", votes: 1 },
  ]);

  const handleCount = (num: number) => {
    setCandidates((candidates) =>
      candidates.map((item) => {
        if (item.id === num) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      })
    );
  };

  const sortedCandidates = candidates.sort((a, b) => {
    return b.votes - a.votes;
  });

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    //console.log("closed");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://chatminder.cf/polls/candidates/"
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const onClick = () => {
  //   axios
  //     .get("https://chatminder.cf/polls/candidates/")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

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
        {sortedCandidates.map((candidate) => (
          <CandidateBox width>
            <CandidateList key={candidate.id} {...candidate} />
            <Button
              auto
              flat
              color="error"
              icon={<Heart primaryColor="#e85186" filled />}
              onClick={() => handleCount(candidate.id)}
            />
          </CandidateBox>
        ))}
      </VoteBox>

      <VoteButtonBox>
        <Button
          size="large"
          color="primary"
          auto
          onClick={handler}
          //onClick={() => onClick()}
        >
          결과보기
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
        <Modal.Body>
          {sortedCandidates.map((candidate) => (
            <CandidateBox>
              <CandidateList key={candidate.id} {...candidate} />
            </CandidateBox>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button auto flat color="error" onClick={closeHandler}>
            취소
          </Button> */}
          <Button auto onClick={closeHandler}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Vote;
