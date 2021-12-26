import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer, Button } from './LoginFormPresenter';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setUserId] = useInputs('');
  const [userPw, setUserPw] = useInputs('');
  const [formCheck1, setFormCheck1] = useState(false);
  const [formCheck2, setFormCheck2] = useState(false);

  // spinner 동작 setting
  const { loading, setLoading }: any = useLoadingContext();
  // redirect
  const navigate = useNavigate();
  // login context
  const { login }: any = useAuthContext();

  const onsubmit = (e: any) => {
    e.preventDefault();
    if (userId !== '' && userPw !== '') {
      setLoading(true);
      const payload = { username: userId, password: userPw };
      console.log(payload);
      login('signin', payload).then((res: any) => {
        if (res) {
          const data = localStorage.getItem('userData');
          if (data) {
            const parsedData = JSON.parse(data);
            const part = parsedData.part;
            console.log(parsedData);
            if (part === 'frontend') {
              navigate('/vote/frontend');
            } else {
              navigate('/vote/backend');
            }
          } else {
            window.alert('something wrong..');
          }
        }
      });
    } else {
      window.alert('입력 form이 완성되지 않았습니다.');
    }
  };

  useEffect(() => {
    if (userId !== '') {
      setFormCheck1(true);
    } else {
      setFormCheck1(false);
    }
  }, [userId]);
  useEffect(() => {
    if (userPw !== '') {
      setFormCheck2(true);
    } else {
      setFormCheck2(false);
    }
  }, [userPw]);

  const spinnerTest = () => {
    setLoading(!loading);
  };

  return (
    <>
      <FormContainer onSubmit={onsubmit}>
        <InputContainer
          type="text"
          placeholder="USERNAME"
          value={userId}
          onChange={setUserId}
        />
        <InputContainer
          type="password"
          placeholder="PASSWORD"
          value={userPw}
          onChange={setUserPw}
        />
        {formCheck1 && formCheck2 ? (
          <Button mode="ok" style={{ marginBottom: '12px' }}>
            Let's start!
          </Button>
        ) : (
          <Button style={{ marginBottom: '12px' }}>Let's start!</Button>
        )}
      </FormContainer>
      <button onClick={spinnerTest}>spinner test</button>
    </>
  );
};

export default LoginFormContainer;
