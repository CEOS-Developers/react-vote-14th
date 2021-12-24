import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  border: 1px solid ${COLORS.primary};
  border-radius: 18px;
`;

export const InputContainer = styled.input`
  flex: 1;
  padding: 0.2rem;
  text-align: left;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 22px;
`;

export const FormContainer = styled.div`
  margin-top: 12px;
`;
