import {
  Grid,
  Card,
  Text,
  Divider,
  Row,
  Button,
  Modal,
  Input,
} from "@nextui-org/react";
import { useState } from "react";

type VoteModalProps = {
  visible: boolean;
  setVisible: Function;
  candidateName: String;
  candidateVote: number;
};

function VoteModal({
  visible,
  setVisible,
  candidateName,
  candidateVote,
}: VoteModalProps) {
  const closeHandlerQuit = () => {
    setVisible(false);
  };
  const closeHandlerVote = () => {
    setVisible(false);
    alert("투표 성공");
  };
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandlerQuit}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          진짜로 {candidateName}님에게 투표하시겠습니까?
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>
          {candidateName}님의 현재 투표수: {candidateVote}
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto color="error" onClick={closeHandlerQuit}>
          최소
        </Button>
        <Button auto onClick={closeHandlerVote}>
          투표
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VoteModal;
