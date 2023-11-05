import styled from "styled-components";

export const BlackBoardListWrapper = styled.div`
  font-size: ${props => props.$emsize};
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  position: relative;
`;

export const BlackBoardEditorWrapper = styled.div`
  font-size: ${props => props.$emsize};
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.grey1};
`;

export const BlackBoardEditorRage = styled.input`
  position: fixed;
  bottom: 10px;
`;

export const BlackBoardWrapper = styled.div`
  width: 100%;
  padding: 6em 3.75em;
  position: relative;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.main1};
`;

export const BlackBoardNickName = styled.div`
  font-size: 1.4em;
  margin-bottom: 1.2em;
`;
export const BlackBoardContent = styled.div`
  font-size: 1.2em;
  line-height: 200%;
`;

export const Sticker = styled.img`
  position: absolute;
  transform: translate((-50%, -50%));
  top: ${props => props.$position_y};
  left: ${props => props.$position_x};
  width: ${props => props.$img_width};
  border: ${props => (props.$movesticker ? "1px solid black" : "0px")};
`;
