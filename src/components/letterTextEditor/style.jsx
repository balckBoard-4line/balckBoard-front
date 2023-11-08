import styled from "styled-components";

export const LetterTextEditorWrapper = styled.div`
  font-size: ${props => props.$emsize};
  font-family: ${props => props.$font};

  height: 25em;
  margin: 15px;
  padding: 20px 0px;

  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: ${props => props.theme.colors.grey1};
  border-radius: 10px;

  div:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
`;

export const LetterTextEditorInputWrapper = styled.div`
  width: 30em;
  height: 100%;
  overflow-y: scroll;
`;
export const LetterTextEditorInput = styled.div`
  width: 100%;
  height: 100%;

  font-size: 1.6em;
  line-height: 200%;
  border: none;
`;

// ----컬러피커
export const colorList = styled.div`
  display: flex;
`;

export const colorBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const colorCheck = styled.img`
  display: ${props => (props.$nowselect ? "flex" : "none")};

  width: 16px;
  height: 16px;
`;

// ----정렬피커
export const alignList = styled.div`
  display: flex;
`;
export const alignBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  opacity: ${props => (props.$nowselect ? 1 : 0.2)};
`;

// ----폰트
export const fontListWrapper = styled.div`
  width: 100%;

  margin: 10px 0px;
  padding: 0 15px;

  overflow-x: scroll;
  flex-shrink: 0;
`;

export const fontList = styled.div`
  display: flex;
`;
export const fontBtn = styled.div`
  padding: 0 16px;
  margin-right: 10px;
  flex-shrink: 0;

  font-size: 12px;

  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${props => props.$font};
  color: ${props =>
    props.$nowselect ? props.theme.colors.main1 : props.theme.colors.font1};
  background-color: ${props =>
    props.$nowselect ? props.theme.colors.white : props.theme.colors.main1};

  border-radius: 10px;
  border: solid 1px;
  border-color: ${props =>
    props.$nowselect ? props.theme.colors.white : props.theme.colors.font1};
`;
