import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.input`
  flex: 1;
  padding: 0.2rem;
  text-align: left;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 22px;
`;
