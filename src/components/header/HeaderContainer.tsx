import { Header, ItemWrapper, Logo, Title } from './HeaderPresenter';
import logo from '../../assets/images/logo.png';

// 수정 중
const HeaderContainer = () => {
  return (
    <Header>
      <ItemWrapper>
        <Logo src={logo} alt="" />
      </ItemWrapper>
      <ItemWrapper>
        <Title>15기 파트장 투표</Title>
      </ItemWrapper>
      <ItemWrapper>
        <Title>프로필</Title>
      </ItemWrapper>
    </Header>
  );
};

export default HeaderContainer;
