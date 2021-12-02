import { useState } from 'react';
import {
  FormContainer,
  InputContainer,
} from '../components/forms/LoginFormPresenter';
import useInputs from '../hooks/useInput';
import { isPassword, isUserName } from '../utils/validator';

interface Payload {
  username: string;
  password: string;
  part: string;
}

const SignUp = () => {
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');
  const [part, setPart] = useState('');

  const handleRadio = (e: any) => {
    setPart(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // body에 담아서 보낼 거 세팅 후 submit
    const payload = {
      username: userId,
      password: userPw,
      part: part,
    };
    // axios call 하기 전 유효성 검사
    if (checkSignUpForm(payload)) {
      onSubmit(payload);
    }
  };
  function checkSignUpForm(payload: Payload) {
    if (!isPassword(payload.password)) {
      window.alert('비밀번호는 영문 숫자 조합 6자리 이상이어야 합니다.');
      return false;
    }
    if (!isUserName(payload.username)) {
      window.alert('사람 이름에 공백이나 특수문자가 왜 들어갑니까...');
      return false;
    }
    return true;
  }

  function onSubmit(payload: Payload) {
    console.log(payload);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormContainer onSubmit={handleSubmit}>
        <h2>이름</h2>
        <InputContainer
          type="text"
          className="IdForm"
          placeholder="ID"
          value={userId}
          onChange={setuserId}
        />
        <h2>비밀번호</h2>
        <InputContainer
          type="text"
          className="PwForm"
          placeholder="PASSWORD"
          value={userPw}
          onChange={setuserPw}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input type="radio" name="field" value="FE" onClick={handleRadio} />{' '}
          프론트
          <input
            type="radio"
            name="field"
            value="BE"
            onClick={handleRadio}
          />{' '}
          백엔드
        </div>
        <button>회원가입하기</button>
      </FormContainer>
    </div>
  );
};

export default SignUp;
