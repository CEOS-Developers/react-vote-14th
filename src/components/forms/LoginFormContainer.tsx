import useInputs from '../../hooks/useInput';
import { FormContainer, InputContainer } from './LoginFormPresenter';

// 수정 중
// pw 안보이게 수정필요
const LoginFormContainer = () => {
  const [userId, setuserId] = useInputs('');
  const [userPw, setuserPw] = useInputs('');

  const onsubmit = (e: any) => {
    e.preventDefault();
    console.log(userId, userPw);
  };

  return (
    <FormContainer onSubmit={onsubmit}>
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
