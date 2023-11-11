import styled from "styled-components";

export const BlackBoardListWrapper = styled.div`
  font-size: ${props => props.$emSize};
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  position: relative;
`;

export const BlackBoardEditorWrapper = styled.div`
  font-size: ${props => props.$emsize};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BlackBoardEditorContent = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;
`;
export const BlackBoardEditorStickerArea = styled.div`
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
  font-family: ${props => props.$font};
`;

export const BlackBoardNickName = styled.div`
  width: 100%;
  font-size: 2em !important;
  margin-bottom: 1.2em;

  text-align: ${props => props.$align};
`;
export const BlackBoardContent = styled.div`
  width: 100%;
  font-size: 1.6em !important;
  line-height: 200%;
  text-align: ${props => props.$align};
`;

export const BlackBoardTitle = styled.div`
  width: 100%;
  font-size: 2.6em !important;
  margin-bottom: 1em;
  text-align: center;
`;

export const BlackBoardIntroduction = styled.div`
  width: 100%;
  font-size: 1.4em !important;
  text-align: center;
`;

export const Sticker = styled.img`
  position: absolute;

  top: ${props => props.$position_y};
  left: ${props => props.$position_x};
  width: ${props => props.$img_width};
  border: ${props => (props.$movesticker ? "3px solid black" : "0px")};

  transform: rotate(${props => props.$img_angle})
    scaleX(${props => props.$img_mirror}) !important;
`;

//----크기 슬라이더
export const RangeListWrapper = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  max-width: 420px;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
`;

export const MirrorBtn = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
export const RangeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  flex-grow: 1;
  height: 100%;
`;

export const RangeWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 0 15px;

  display: flex;
  align-items: center;

  input::-webkit-slider-thumb {
    -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    width: 14px; /* 슬라이더 핸들 길이 */
    height: 14px; /* 슬라이더 핸들 높이 */
    border-radius: 50%; /* 핸들 모양을 원모양으로 만들기 위함 */
    background: white; /* 슬라이더 핸들 색상 */
    cursor: pointer; /* 슬라이더 핸들에 마우스를 갖다대면 포인터로 변경 */
  }

  input::-moz-range-thumb {
    width: 14px; /* 슬라이더 핸들 길이 */
    height: 14px; /* 슬라이더 핸들 높이 */
    border-radius: 50%; /* 핸들 모양을 원모양으로 만들기 위함 */
    background: white; /* 슬라이더 핸들 색상 */
    cursor: pointer; /* 슬라이더 핸들에 마우스를 갖다대면 포인터로 변경 */
  }
`;

export const RangeTitle = styled.div`
  font-size: 14px;
  flex-shrink: 0;
  margin-right: 10px;
  width: 28px;
`;
export const Range = styled.input`
  -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
  width: 100%; /* 슬라이더 길이 */
  border-radius: 5px; /* 슬라이더 모서리를 약간 둥글게 */
  background: ${props => props.theme.colors.font1}; /* 슬라이더 색상 */
  outline: none; /* 슬라이더 테두리 없이 */
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
  z-index: 9999999999999999999999;

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
