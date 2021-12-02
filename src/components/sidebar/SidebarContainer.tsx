import {
  Sidebar,
  ItemsWrapper,
  StyledNavLink,
  Logo,
  Text,
} from "./SidebarPresenter";
import logo from "../../assets/images/logo.png";

// 수정 중
const SidebarContainer = () => {
  return (
    <Sidebar>
      <ItemsWrapper>
        <StyledNavLink to={"/"}>
          <Logo src={logo} alt="" />
        </StyledNavLink>
        <StyledNavLink to={"/vote/:part"}>
          <Text>Vote</Text>
        </StyledNavLink>
        <StyledNavLink to={"/result"}>
          <Text>Result</Text>
        </StyledNavLink>
      </ItemsWrapper>
      <StyledNavLink to={"/"}>
        <Text>Profile</Text>
      </StyledNavLink>
    </Sidebar>
  );
};

export default SidebarContainer;
