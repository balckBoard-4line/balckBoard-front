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

  overflow-y: scroll;
  background-color: ${props => props.theme.colors.grey1};
  padding-bottom: 40px;
`;

export const BlackBoardEditorRage = styled.input`
  position: fixed;
  bottom: 10px;
  z-index: 2;
`;

export const BlackBoardEditorSticker = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;
export const BlackBoardWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 6em 3.75em;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
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

  top: ${props => props.$position_y};
  left: ${props => props.$position_x};
  width: ${props => props.$img_width};
  border: ${props => (props.$movesticker ? "1px solid black" : "0px")};
`;

// ----스티커 선택 모달

export const StickerModalWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  max-width: 420px;

  padding: 20px 15px;
  padding-bottom: 10px;

  background-color: #262626;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StickerModalCloseBtn = styled.img`
  width: 36px;
  height: 36px;

  margin-bottom: 10px;

  flex-shrink: 0;
`;

export const StickerListWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: scroll;
`;
export const StickerList = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
`;

export const StickerModalSticker = styled.img`
  width: 100%;
`;
