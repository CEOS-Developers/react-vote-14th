import styled from 'styled-components';
import { css } from 'styled-components';
import COLORS from '../../constants/colors';

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  border: 1px solid ${COLORS.primary};
  border-radius: 18px;
`;

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
  margin-bottom: 6px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SpanGreen = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: green;
`;
export const SpanTomato = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: tomato;
`;
export const SpanDefault = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

interface ModeProp {
  mode?: string;
}

export const Button = styled.button<ModeProp>`
  ${(props) => {
    switch (props.mode) {
      case 'ok':
        return css`
          background-color: ${COLORS.green};
          border: none;
          border-radius: 18px;
          color: white;
          padding: 15px 32px;
          text-align: center;
          font-size: 16px;
          margin-top: 6px;
        `;
      default:
        return css`
          background-color: ${COLORS.lightGray};
          border: none;
          border-radius: 18px;
          color: black;
          padding: 15px 32px;
          text-align: center;
          font-size: 16px;
          margin-top: 6px;
        `;
    }
  }}
`;
