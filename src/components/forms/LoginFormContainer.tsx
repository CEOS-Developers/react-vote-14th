import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer } from './LoginFormPresenter';
import { useLoadingContext } from '../../contexts/LoadingContext';
import axios from 'axios';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setUserId] = useInputs('');
  const [userPw, setUserPw] = useInputs('');

  // spinner 동작 setting
  const { loading, setLoading }: any = useLoadingContext();

  const onsubmit = (e: any) => {
    e.preventDefault();

    if (userId && userPw) {
      console.log(userId, userPw);
      setLoading(true);
      axios
        .post('https://vote-mailedit.kro.kr/api/signin', {
          username: userId,
          password: userPw,
        })
        .then((res) => {
          // setloading 풀어줘
          setLoading(false);
          if (res.status === 200) {
            console.log(res.data);
            console.log('login success');
          }
        })
        .catch((err) => {
          setLoading(false);
          window.alert('회원정보가 일치하지 않습니다.');
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
