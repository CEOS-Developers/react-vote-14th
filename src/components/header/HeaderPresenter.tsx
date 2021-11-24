import styled from 'styled-components';

export const Header = styled.header`
  height: 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid #e2e2e2;
`;

export const ItemWrapper = styled.section`
  height: 100%;
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 30px;

  object-fit: contain;
`;

export const Title = styled.h3`
  display: flex;
`;
