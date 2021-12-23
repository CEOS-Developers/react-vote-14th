import logo from '../../assets/images/logo.png';
import {
  Logo,
  Menus,
  Sidebar,
  StyledLink,
  Menu,
  Group,
  GroupName,
  SignOut,
} from './SidebarPresenter';

const SidebarContainer = () => {
  return (
    <Sidebar>
      <Logo src={logo} alt="" />
      <Menus>
        <Group>
          <GroupName>투표하기</GroupName>
          <StyledLink to={`/vote/frontend`}>
            <Menu>프론트엔드</Menu>
          </StyledLink>
          <StyledLink to={`/vote/backend`}>
            <Menu>백엔드</Menu>
          </StyledLink>
        </Group>
        <Group>
          <GroupName>결과 보기</GroupName>
          <StyledLink to={'/result'}>
            <Menu>투표 결과</Menu>
          </StyledLink>
        </Group>
      </Menus>
      <SignOut>로그아웃</SignOut>
    </Sidebar>
  );
};

export default SidebarContainer;
