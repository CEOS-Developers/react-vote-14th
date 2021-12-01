import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer } from './LoginFormPresenter';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');
  return (
    <FormContainer>
      <InputContainer
        type="text"
        placeholder="ID"
        value={userId}
        onChange={setuserId}
      />
      <InputContainer
        type="text"
        placeholder="PASSWORD"
        value={userPw}
        onChange={setuserPw}
      />
      <button>Let's start!</button>
    </FormContainer>
  );
};

export default LoginFormContainer;
