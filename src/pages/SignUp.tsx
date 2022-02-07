import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  InputContainer,
  Container,
  Button,
  SpanGreen,
  SpanTomato,
  SpanDefault,
  FullScreen,
} from '../components/forms/LoginFormPresenter';
import { useAuthContext } from '../contexts/AuthContext';
import useFormCheck from '../hooks/useFormCheck';
import useInputs from '../hooks/useInput';
import {
  isPart,
  isPassword,
  isUserName,
  isEmail,
  emailDuplicateCheck,
  userNameDuplicateCheck,
} from '../utils/validator';

interface Payload {
  email: string;
  username: string;
  password: string;
  part: string;
}

const SignUp = () => {
  const [userEmail, setuserEmail] = useInputs('');
  const [emailValid, setEmailValid] = useState(true);
  const [username, setUsername] = useInputs('');
  const [userPassword, setUserPassword] = useInputs('');
  const [userPart, setUserPart] = useState('');

  const [formCheck1, setFormcheck1] = useState(false);
  const [formCheck2, setFormcheck2] = useState(false);
  const formCheck3 = useFormCheck(userPassword);
  const formCheck4 = useFormCheck(userPart);

  // redirect
  const navigate = useNavigate();
  // login context
  const { login }: any = useAuthContext();

  const handleRadio = (e: any) => {
    setUserPart(e.target.value);
  };
  const duplicateEmail = async () => {
    const flag = await emailDuplicateCheck(userEmail);
    flag ? setFormcheck1(false) : setFormcheck1(true);
    if (flag) {
      window.alert('중복된 이메일입니다.');
    } else {
      window.alert('사용할 수 있는 이메일입니다.');
    }
  };
  const duplicateUserName = async () => {
    const flag = await userNameDuplicateCheck(username);
    flag ? setFormcheck2(false) : setFormcheck2(true);
    if (flag) {
      window.alert('중복된 이름입니다.');
    } else {
      window.alert('사용할 수 있는 이름입니다.');
    }
  };

  useEffect(() => {
    setEmailValid(isEmail(userEmail));
  }, [userEmail]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // body에 담아서 보낼 거 세팅 후 submit
    const payload = {
      email: userEmail,
      username: username,
      password: userPassword,
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
    } else if (!isEmail(payload.email)) {
      window.alert('중복된 이메일입니다.');
    } else if (!isUserName(payload.username)) {
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
        navigate(`/vote/${userPart}`);
      }
    });
  }

  return (
    <FullScreen>
      <Container onSubmit={handleSubmit}>
        <FormContainer>
          <div>
            <h2>이메일</h2>
          </div>
          <InputContainer
            type="text"
            placeholder="EMAIL"
            value={userEmail}
            onChange={setuserEmail}
          />
          <div>
            {emailValid ? (
              <div style={{ marginTop: '12px' }}>
                <SpanGreen>
                  이메일 형식이 올바르네요! ☺️
                  <SpanDefault onClick={duplicateEmail}>중복확인</SpanDefault>
                </SpanGreen>
              </div>
            ) : (
              <SpanTomato>이메일 형식을 지켜주세요 ☺️☺️</SpanTomato>
            )}
          </div>
        </FormContainer>
        <FormContainer>
          <h2>이름</h2>
          <InputContainer
            type="text"
            placeholder="ID"
            value={username}
            onChange={setUsername}
          />
          <div>
            {username ? (
              <div style={{ marginTop: '12px' }}>
                <SpanGreen>
                  멋진 이름이네요! ☺️
                  <SpanDefault onClick={duplicateUserName}>
                    중복확인
                  </SpanDefault>
                </SpanGreen>
              </div>
            ) : (
              <></>
            )}
          </div>
        </FormContainer>
        <FormContainer>
          <h2>비밀번호</h2>
          <InputContainer
            type="password"
            placeholder="PASSWORD"
            value={userPassword}
            onChange={setUserPassword}
          />
        </FormContainer>
        <FormContainer>
          <div
            style={{
              marginTop: '12px',
              marginBottom: '12px',
              display: 'flex',
              flexDirection: 'row',
              margin: '12px',
            }}
          >
            <label style={{ marginRight: '12px' }}>
              <input
                type="radio"
                name="part"
                value="frontend"
                onClick={handleRadio}
              />
              프론트
            </label>
            <label>
              <input
                type="radio"
                name="part"
                value="backend"
                onClick={handleRadio}
              />
              백엔드
            </label>
          </div>
        </FormContainer>
        {formCheck1 && formCheck2 && formCheck3 && formCheck4 ? (
          <Button mode="ok" style={{ marginBottom: '12px' }}>
            회원가입하기
          </Button>
        ) : (
          <Button style={{ marginBottom: '12px' }}>회원가입하기</Button>
        )}
      </Container>
    </FullScreen>
  );
};

export default SignUp;
