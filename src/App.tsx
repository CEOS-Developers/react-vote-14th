import { Button, Modal, useModal, Text, Spacer } from '@nextui-org/react';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import useUser from './@shared/hooks/useUser';
import Vote from './pages/vote/vote';

function App() {
  const { logOut } = useUser();
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Spacer y={2} />
      <img src={`${process.env.PUBLIC_URL}/cover.png`}></img>
      <Spacer y={2} />
      <div>
        <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
          개발자의 한 마디
        </Button>
        <Modal
          scroll
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              🙌 안녕하세요! 🙌
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-description">
              팀 저집처럼🏠의 프론트엔드 파트장..이자 팀원.. 연장자..(어라
              어째서 눈물이..)인 구본준 입니다. 백엔드 팀원 분들과 연합하여 투표
              페이지를 만들어 보았습니다. 여러분의 손으로 다음 임원진을
              뽑아주세요!! 타입스크립트 어렵다... next UI 체고..🌟
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              멋져요
            </Button>
            <Button auto onClick={() => setVisible(false)}>
              힘내세요
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
