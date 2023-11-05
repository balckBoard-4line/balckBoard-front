import styled from "styled-components";

export const BlackBoardListWrapper = styled.div`
  font-size: ${props => props.$emsize};
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const BlackBoardWrapper = styled.div`
  width: 100%;
  padding: 6em 3.75em;
`;

export const BlackBoardNickName = styled.div`
  font-size: 1.4em;
  margin-bottom: 1.2em;
`;
export const BlackBoardContent = styled.div`
  font-size: 1.2em;
  line-height: 200%;
  div {
    display: flex;
    align-items: center;
  }
`;
