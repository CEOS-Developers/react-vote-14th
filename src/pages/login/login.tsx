import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { userContext } from '../../@shared/context/user';
import useUser from '../../@shared/hooks/useUser';

const Login = (props: PropsWithChildren<{}>) => {
  type id = string | undefined;
  type password = string | undefined;
  type email = string | undefined;
  type loginInfo = { id: id; password: password; email: email };
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    id: undefined,
    password: undefined,
    email: undefined,
  });

  const { getUser, setUser, signUp } = useUser();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'id':
        setLoginInfo({ ...loginInfo, id: value });
        break;
      case 'password':
        setLoginInfo({ ...loginInfo, password: value });
        break;
      case 'email':
        setLoginInfo({ ...loginInfo, email: value });
        break;
      default:
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    signUp(loginInfo.id, loginInfo.password, loginInfo.email);
  };

  const test = useMemo(() => {}, [loginInfo]);

  useEffect(() => {
    console.log(loginInfo);
  }, [test]);

  return (
    <form onSubmit={handleSubmit}>
      로그인
      <div>아이디</div>
      <input name="id" type="text" onChange={handleChange} />
      <div>비밀번호</div>
      <input name="password" type="password" onChange={handleChange} />
      <div>이메일</div>
      <input name="email" type="text" onChange={handleChange} />
      <button type="submit">로그인</button>
      <button>회원가입</button>
    </form>
  );
};

export default Login;
