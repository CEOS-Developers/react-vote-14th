import {
  Sidebar,
  ItemsWrapper,
  ItemWrapper,
  Logo,
  Text,
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
          <Text>투표 하기</Text>
        </ItemWrapper>
        <ItemWrapper>
          <Text>투표 결과</Text>
        </ItemWrapper>
      </ItemsWrapper>
      <ItemWrapper>
        <Text>프로필 아이콘</Text>
      </ItemWrapper>
    </Sidebar>
  );
};

export default SidebarContainer;
