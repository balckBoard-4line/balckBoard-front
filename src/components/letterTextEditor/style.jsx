import styled from "styled-components";

export const LetterTextEditorWrapper = styled.div`
  font-size: ${props => props.$emsize};

  height: 25em;
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: ${props => props.theme.colors.grey1};
`;

export const LetterTextEditorInputWrapper = styled.div`
  width: 30em;
  height: 100%;
`;
export const LetterTextEditorInput = styled.div`
  width: 100%;

  height: 100%;
  border: 1px solid white;

  font-size: 1.2em;
  line-height: 200%;

  div {
    display: flex;
    align-items: center;
  }
`;
