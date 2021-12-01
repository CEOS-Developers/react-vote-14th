import {
  Sidebar,
  ItemsWrapper,
  ItemWrapper,
  Logo,
  Text,
} from "./SidebarPresenter";
import logo from "../../assets/images/logo.png";

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
        <ItemWrapper>
          <Text>Result</Text>
        </ItemWrapper>
      </ItemsWrapper>
      <ItemWrapper>
        <Text>Profile</Text>
      </ItemWrapper>
    </Sidebar>
  );
};

export default SidebarContainer;
