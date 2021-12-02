import { useState } from 'react';
import {
  FormContainer,
  InputContainer,
} from '../components/forms/LoginFormPresenter';
import useInputs from '../hooks/useInput';

const SignUp = () => {
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');
  const [part, setPart] = useState('');

  const handleRadio = (e: any) => {
    setPart(e.target.value);
  };

  const onsubmit = (e: any) => {
    e.preventDefault();
    // body에 담아서 보낼 거 세팅 후 axios
    const payload = {
      username: userId,
      password: userPw,
      part: part,
    };

    console.log(payload);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormContainer onSubmit={onsubmit}>
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
