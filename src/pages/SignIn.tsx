import { Link } from 'react-router-dom';
import LoginFormContainer from '../components/forms/LoginFormContainer';
import { Container } from '../components/forms/LoginFormPresenter';

const SignIn = () => {
  // 페이지 진입 시 id 입력 form에 focus.
  // 전체 form도 묶어서 컴포넌트로 만들기
  // 각 input form 컴포넌트화하기

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
      <Container>
        <h1>Log in</h1>
        <h3>15기 프론트/파트장 투표</h3>
        <LoginFormContainer />
        <div>
          <p>Don't have an account?</p>
          <Link to={'/signup'}>
            <p>Sign Up</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
