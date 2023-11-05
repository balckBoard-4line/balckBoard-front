import * as S from "./style";
import React, { useEffect, useRef, useState } from "react";

import Draggable from "react-draggable";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import Header from "../layout/header/StickerEditorHeader";
import BlackBoardStickerModal from "./BlackBoardStickerModal";

function BlackBoardEditor() {
  const [showStickerModal, setShowStickerModal] = useState(false);
  const getShowStickerModal = bool => {
    setShowStickerModal(bool);
  };

  const emSize = (useInnerWidth() / 375) * 10;

  //현재 수정중인 스티커
  const [currentSticker, setCurrentSticker] = useState(0);
  const [stickers, setStickers] = useState([]);

  const getSticker = img => {
    setShowStickerModal(false);
    setStickers(
      stickers.concat({
        num: stickers.length + 1,
        positionX: 0,
        positionY: 0,
        img: img,
        width: 10
      })
    );
  };

  useEffect(() => {
    console.log(stickers);
  }, [stickers]);

  const getWidthEm = width => {
    return width * (1 / emSize);
  };

  const getHeighthEm = height => {
    return height * (1 / emSize);
  };

  //스티커 크기조절
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (currentSticker != 0) {
      setVolume(stickers[currentSticker - 1].width / 10);
    }
  }, [currentSticker]);

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].width = 10 * volume;
    }
  }, [volume]);

  //스티커 이동
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값

  const trackPos = data => {
    setCurrentSticker(data.node.title);
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].positionX = getWidthEm(position.x);
      stickers[currentSticker - 1].positionY = getHeighthEm(position.y);
    }
  }, [position]);

  const data = {
    id: 1,
    nickname: "서현",
    content: `   이건 텍스트 에디터....
        <div>왜구현이 안되지...</div>
        
        <div>진짜 마음개힘들다</div>

        <div>
          왜 색깔먹이<span class="yellow">면 엔터가 안될까</span>요?
          왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
          왜 색깔먹이<span class="blue">면 엔터가 안될까</span>요?
        </div>
     
`,
    font: "Dongguk"
  };
  const loadContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  };

  return (
    <S.BlackBoardEditorWrapper $emsize={emSize + "px"}>
      <Header getShowStickerModal={getShowStickerModal} />
      {/* 스티커 크기조절 슬라이더 ---- 옮기는 스티커가 있으면 보임*/}
      {currentSticker != 0 ? (
        <S.RangeWrapper>
          <S.RangeTitle>스티커 크기</S.RangeTitle>
          <S.Range
            className="slider"
            type="range"
            min={0}
            default={1}
            max={2}
            color="gray"
            step={0.02}
            value={volume}
            onChange={event => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </S.RangeWrapper>
      ) : (
        <></>
      )}
      {/* 스티커 크기조절 슬라이더*/}

      <S.BlackBoardEditorStickerArea>
        {/* 스티커 배치하기 */}
        {stickers.map(sticker => (
          <Draggable
            key={sticker.num}
            //   bounds={".draggableBounds"}
            onDrag={(e, data) => trackPos(data)}
          >
            <S.Sticker
              title={sticker.num}
              $img_width={sticker.width + "em"}
              src={`/sticker/${sticker.img}.svg`}
              $movesticker={currentSticker == sticker.num}
              style={{ zIndex: `${sticker.num}` }}
            />
          </Draggable>
        ))}
        {/* 스티커 배치하기 */}

        {/* ----전에 받아온 칠판 데이터 */}
        <S.BlackBoardWrapper $font={data.font}>
          <S.BlackBoardNickName>{data.nickname}</S.BlackBoardNickName>
          <S.BlackBoardContent>{loadContent()}</S.BlackBoardContent>
        </S.BlackBoardWrapper>
        {/* ----전에 받아온 칠판 데이터 */}
      </S.BlackBoardEditorStickerArea>

      {showStickerModal ? (
        <BlackBoardStickerModal
          getShowStickerModal={getShowStickerModal}
          getSticker={getSticker}
        />
      ) : (
        <></>
      )}
    </S.BlackBoardEditorWrapper>
  );
}

export default BlackBoardEditor;
