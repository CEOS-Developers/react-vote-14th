import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer } from './LoginFormPresenter';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setUserId] = useInputs('');
  const [userPw, setUserPw] = useInputs('');

  // spinner 동작 setting
  const { loading, setLoading }: any = useLoadingContext();
  // redirect
  const navigate = useNavigate();
  // login context
  const { login }: any = useAuthContext();

  const onsubmit = (e: any) => {
    e.preventDefault();

    if (userId && userPw) {
      setLoading(true);
      const payload = { username: userId, password: userPw };
      login('signin', payload).then((res: any) => {
        if (res) {
          const data = localStorage.getItem('userData');
          if (data) {
            const parsedData = JSON.parse(data);
            const part = parsedData.part;
            console.log(parsedData);
            if (part === 'FE') {
              navigate('/vote/frontend');
            } else {
              navigate('/vote/backend');
            }
          } else {
            window.alert('something wrong..');
          }
        }
      });
    }
  };

  const spinnerTest = () => {
    setLoading(!loading);
  };

  return (
    <>
      <FormContainer onSubmit={onsubmit}>
        <InputContainer
          type="text"
          placeholder="ID"
          value={userId}
          onChange={setUserId}
        />
        <InputContainer
          type="password"
          placeholder="PASSWORD"
          value={userPw}
          onChange={setUserPw}
        />
        <button>Let's start!</button>
      </FormContainer>
      <button onClick={spinnerTest}>spinner test</button>
    </>
  );
};

export default LoginFormContainer;
