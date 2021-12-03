import {
  Sidebar,
  ItemsWrapper,
  StyledNavLink,
  Logo,
  Text,
  ItemWrapper,
} from './SidebarPresenter';
import logo from '../../assets/images/logo.png';

// 수정 중
const SidebarContainer = () => {
  return (
    <Sidebar>
      <ItemsWrapper>
        <ItemWrapper>
          <Logo src={logo} alt="" />
        </ItemWrapper>
        <ItemWrapper>
          <Text>Vote</Text>
        </ItemWrapper>
        <StyledNavLink to={'/result'}>
          <Text>Result</Text>
        </StyledNavLink>
      </ItemsWrapper>
      <ItemWrapper>
        <Text>Profile</Text>
      </ItemWrapper>
    </Sidebar>
  );
};

export default SidebarContainer;
