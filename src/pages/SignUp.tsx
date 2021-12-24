import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  InputContainer,
  Container,
} from '../components/forms/LoginFormPresenter';
import { useAuthContext } from '../contexts/AuthContext';
import useInputs from '../hooks/useInput';
import { isPart, isPassword, isUserName, isEmail } from '../utils/validator';

interface Payload {
  userEmail: string;
  userName: string;
  password: string;
  part: string;
}

const SignUp = () => {
  const [userEmail, setuserEmail] = useInputs('');
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');
  const [userPart, setUserPart] = useState('');

  // redirect
  const navigate = useNavigate();
  // login context
  const { login }: any = useAuthContext();

  const handleRadio = (e: any) => {
    setUserPart(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // body에 담아서 보낼 거 세팅 후 submit
    const payload = {
      userEmail: userEmail,
      userName: userId,
      password: userPw,
      part: userPart,
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
    } else if (!isEmail(payload.userEmail)) {
      window.alert('사용할 수 없는 이메일입니다.');
    } else if (!isUserName(payload.userName)) {
      window.alert('사람 이름에 공백이나 특수문자가 왜 들어갑니까...');
      return false;
    } else if (!isPart(payload.part)) {
      window.alert('파트 선택을 깜빡하셨군요');
      return false;
    } else {
      return true;
    }
  }

  // post to signup url and redirect
  function onSubmit(payload: Payload) {
    login('signup', payload).then((res: any) => {
      if (res) {
        if (userPart === 'FE') {
          navigate('/vote/frontend');
        } else {
          navigate('/vote/backend');
        }
      }
    });
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container onSubmit={handleSubmit}>
        <FormContainer>
          <div>
            <h2>이메일</h2>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                verticalAlign: 'baseline',
                color: 'red',
              }}
            >
              이메일 형식이 올바르지 않습니다.
            </span>
          </div>
          <InputContainer
            type="text"
            placeholder="EMAIL"
            value={userEmail}
            onChange={setuserEmail}
          />
        </FormContainer>
        <FormContainer>
          <h2>이름</h2>
          <InputContainer
            type="text"
            placeholder="ID"
            value={userId}
            onChange={setuserId}
          />
        </FormContainer>
        <FormContainer>
          <h2>비밀번호</h2>
          <InputContainer
            type="password"
            placeholder="PASSWORD"
            value={userPw}
            onChange={setuserPw}
          />
        </FormContainer>
        <FormContainer>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" name="part" value="FE" onClick={handleRadio} />{' '}
            프론트
            <input
              type="radio"
              name="part"
              value="BE"
              onClick={handleRadio}
            />{' '}
            백엔드
          </div>
        </FormContainer>
        <button>회원가입하기</button>
      </Container>
    </div>
  );
};

export default SignUp;
