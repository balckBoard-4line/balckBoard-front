import * as S from "./style";
import React, { useEffect, useRef, useState } from "react";
import "./blackBoardColor.css";
import Draggable from "react-draggable";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";

function BlackBoardEditor() {
  const emSize = (useInnerWidth() / 375) * 10;
  const [stickers, setStickers] = useState([
    { num: 1, positionX: 2, positionY: 3, img: 1, width: 10 },
    { num: 2, positionX: 5, positionY: 6, img: 2, width: 10 }
  ]);

  const [volume, setVolume] = useState(1);
  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].width = 10 * volume;
    }
    console.log(stickers);
  }, [volume]);
  useEffect(() => {});

  const [currentSticker, setCurrentSticker] = useState(0);
  const data = {
    id: 1,
    nickname: "서현",
    content: `   이건 텍스트 에디터....<div>안녕안녕</div>
        <div>왜이런 비극이 자꾸...일어나지</div>
        <div>왜이런 비극이 자꾸...일어나지</div>

        <div>
          왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?
          왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?
          왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?
        </div>`,
    font: 1
  };
  const loadContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  };
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  const trackPos = data => {
    setCurrentSticker(data.node.title);
    setPosition({ x: data.x, y: data.y });
    if (currentSticker != 0) {
      setVolume(stickers[currentSticker - 1].width / 10);
    }
  };

  useEffect(() => {
    if (currentSticker != 0) {
      stickers[currentSticker - 1].positionX = position.x;
      stickers[currentSticker - 1].positionY = position.y;
    }
  }, [position]);

  return (
    <S.BlackBoardEditorWrapper $emsize={emSize + "px"}>
      <div className="draggableBounds">
        <S.BlackBoardWrapper>
          <S.BlackBoardNickName>{data.nickname}</S.BlackBoardNickName>
          <S.BlackBoardContent>{loadContent()}</S.BlackBoardContent>

          {/* 스티커 배치하기 */}
          {stickers.map(sticker => (
            <Draggable
              key={sticker.num}
              bounds={".draggableBounds"}
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
        </S.BlackBoardWrapper>
      </div>

      <S.BlackBoardEditorRage
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
    </S.BlackBoardEditorWrapper>
  );
}

export default BlackBoardEditor;
