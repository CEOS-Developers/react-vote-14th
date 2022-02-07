import { Link } from 'react-router-dom';
import LoginFormContainer from '../components/forms/LoginFormContainer';
import {
  Box,
  FullScreen,
  SpanDefault,
} from '../components/forms/LoginFormPresenter';

const SignIn = () => {
  return (
    <FullScreen>
      <Box>
        <h1>Log in</h1>
        <h3>15기 프론트/파트장 투표</h3>
        <LoginFormContainer />
        <div style={{ marginBottom: '12px' }}>
          <Link to={'/signup'}>
            <SpanDefault>회원가입 하고 투표하기 🥳</SpanDefault>
          </Link>
        </div>
      </Box>
    </FullScreen>
  );
};

export default SignIn;
