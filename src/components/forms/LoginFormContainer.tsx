import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer } from './LoginFormPresenter';
// import { useLoadingContext } from '../../contexts/LoadingContext';
import { Spinner } from '../Spinner';
import axios from 'axios';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');

  const onsubmit = (e: any) => {
    e.preventDefault();
    // setLoading(true);
    const form = new FormData();
    form.append('username', userId);
    form.append('password', userPw);

    if (userId && userPw) {
      console.log(userId, userPw);
      axios
        .post('https://vote-mailedit.kro.kr/api/signup', form)
        .then((res) => {
          // setloading 풀어줘
          switch (res.status) {
            case 200:
              console.log(res.data);
              console.log('login success');
              break;
            case 401:
              console.log('일치하는 회원 없음');
              break;
          }
        })
        .catch((err) => {
          //setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <FormContainer onSubmit={onsubmit}>
      <Spinner />
      <InputContainer
        type="text"
        className="IdForm"
        placeholder="ID"
        value={userId}
        onChange={setuserId}
      />
      <InputContainer
        type="text"
        className="PwForm"
        placeholder="PASSWORD"
        value={userPw}
        onChange={setuserPw}
      />
      <button>Let's start!</button>
    </FormContainer>
  );
};

export default LoginFormContainer;
