import styled from "styled-components";

export const InputContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0px 15px;
  margin-bottom: 15px;
`;

export const InputTitle = styled.div`
  font-size: 16px;
  padding: 0px 5px;
  margin-bottom: 10px;
`;
export const InputWrapper = styled.div`
  width: 100%;

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
