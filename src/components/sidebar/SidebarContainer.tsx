import {
  Sidebar,
  ItemsWrapper,
  StyledLink,
  Logo,
  Text,
  ItemWrapper,
} from './SidebarPresenter';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';

// 수정 중
const SidebarContainer = () => {
  const user: any = localStorage.getItem('userData');
  const part: string = JSON.parse(user).part;
  const [partName, setPartName] = useState('');

  useEffect(() => {
    // 나중에 url 통일할 예정입니다,,,
    if (part === 'BE') {
      setPartName('backend');
    } else if (part === 'FE') {
      setPartName('frontend');
    }
  }, [part]);

  return (
    <Sidebar>
      <ItemsWrapper>
        <StyledLink to={`/vote/${partName}`}>
          <Logo src={logo} alt="" />
        </StyledLink>
        <StyledLink to={`/vote/${partName}`}>
          <Text>Vote</Text>
        </StyledLink>
        <StyledLink to={'/result'}>
          <Text>Result</Text>
        </StyledLink>
      </ItemsWrapper>
      <ItemWrapper>
        <Text>Profile</Text>
      </ItemWrapper>
    </Sidebar>
  );
};

export default SidebarContainer;
