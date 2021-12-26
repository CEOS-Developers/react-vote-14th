import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer, Button } from './LoginFormPresenter';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface payload {
  username: string;
  password: string;
}
const LoginFormContainer = () => {
  const [username, setUserId] = useInputs('');
  const [userPw, setUserPw] = useInputs('');
  const [formCheck1, setFormCheck1] = useState(false);
  const [formCheck2, setFormCheck2] = useState(false);

  // spinner 동작 setting
  const { setLoading }: any = useLoadingContext();
  // redirect
  const navigate = useNavigate();
  // login context
  const { login }: any = useAuthContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username !== '' && userPw !== '') {
      const payload = { username: username, password: userPw };
      onSubmit(payload);
    } else {
      window.alert('입력 form이 완성되지 않았습니다.');
    }
  };

  function onSubmit(payload: payload) {
    if (username !== '' && userPw !== '') {
      setLoading(true);
      login('signin', payload).then((res: any) => {
        if (res) {
          const data = localStorage.getItem('userData');
          if (data) {
            const parsedData = JSON.parse(data);
            const part = parsedData.part;
            setLoading(false);
            navigate(`/vote/${part}`);
          } else {
            window.alert('서버 상의 문제가 있어요 😢');
          }
        }
      });
    } else {
      window.alert('입력 form이 완성되지 않았어요. 😢');
    }
  }

  useEffect(() => {
    if (username !== '') {
      setFormCheck1(true);
    } else {
      setFormCheck1(false);
    }
  }, [username]);
  useEffect(() => {
    if (userPw !== '') {
      setFormCheck2(true);
    } else {
      setFormCheck2(false);
    }
  }, [userPw]);

  // const spinnerTest = () => {
  //   setLoading(!loading);
  // };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <FormContainer>
          <InputContainer
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={setUserId}
          />
          <InputContainer
            type="password"
            placeholder="PASSWORD"
            value={userPw}
            onChange={setUserPw}
          />
        </FormContainer>
        {formCheck1 && formCheck2 ? (
          <Button mode="ok" style={{ marginBottom: '12px' }}>
            Let's start!
          </Button>
        ) : (
          <Button style={{ marginBottom: '12px' }}>Let's start!</Button>
        )}
      </form>
      {/* <button onClick={spinnerTest}>spinner test</button> */}
    </>
  );
};

export default LoginFormContainer;
