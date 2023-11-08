import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  input::placeholder {
    font-family: "Pretendard";
    color: ${props => props.theme.colors.font1};
  }
`;
export const InputArea = styled.input`
  font-size: 16px;
  color: white;

  padding: 15px 20px;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.grey1};
  font-family: ${props => props.$font};
`;

export const InputCount = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: end;

  font-size: 12px;
  font-family: "Pretendard";
  color: ${props => props.theme.colors.font1};
`;
