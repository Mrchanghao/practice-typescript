import styled from 'styled-components';
import { colors } from '~/constants/style';

export const FormAWrapper = styled.form`
  margin-top: -24px;
`;
export const FormAField = styled.div<{ ratio?: number }>`
  margin: 24px 0 0;
  display: flex;
  flex: ${({ ratio = 1 }) => `${ratio} ${ratio}`} 0px;
  flex-direction: column;
  position: relative;
`;

export const FormARow = styled.div`
  display: flex;
  margin: 0 -10px;
  & ${FormAField} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const FormALabel = styled.div`
  line-height: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const FormAInput = styled.input`
  height: 70px;
  border-radius: 5px;
  border: solid 1px ${colors.black};
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.17px;
  box-sizing: border-box;
  padding: 20px 24px;
  width: 100%;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

export const FormATextarea = styled.textarea`
  height: 146px;
  border-radius: 5px;
  border: solid 1px ${colors.black};
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.17px;
  box-sizing: border-box;
  padding: 20px 24px;
  resize: none;
  width: 100%;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;
