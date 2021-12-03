import {
  Sidebar,
  ItemsWrapper,
  StyledNavLink,
  Logo,
  Text,
} from './SidebarPresenter';
import logo from '../../assets/images/logo.png';

// 수정 중
const SidebarContainer = () => {
  return (
    <Sidebar>
      <ItemsWrapper>
        <Logo src={logo} alt="" />
        <StyledNavLink to={'/vote/:part'}>
          <Text>Vote</Text>
        </StyledNavLink>
        <StyledNavLink to={'/result'}>
          <Text>Result</Text>
        </StyledNavLink>
      </ItemsWrapper>
      <Text>Profile</Text>
    </Sidebar>
  );
};

export default SidebarContainer;
