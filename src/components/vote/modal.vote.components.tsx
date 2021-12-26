import {
  Grid,
  Card,
  Text,
  Divider,
  Row,
  Button,
  Modal,
  Input,
  Loading,
} from "@nextui-org/react";
import { notification, Space } from "antd";
import { useState } from "react";
import axios from "axios";

type VoteModalProps = {
  visible: boolean;
  setVisible: Function;
  candidateName: string;
  candidateVote: number;
  candidateImage: string;
};

function VoteModal({
  visible,
  setVisible,
  candidateName,
  candidateVote,
  candidateImage,
}: VoteModalProps) {
  const closeHandlerQuit = () => {
    setVisible(false);
  };
  const closeHandlerVote = () => {
    setVisible(false);
    openNotification("bottomRight");
  };
  const openNotification = (placement: any) => {
    notification.info({
      placement,
      message: "투표 성공!",
    });
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
        <img src={candidateImage} alt={candidateName} />
        {/* <Card.Image
          objectFit="cover"
          autoResize={false}
          src={candidateImage}
          width="100%"
          height={140}
          alt={candidateName}
        /> */}
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
