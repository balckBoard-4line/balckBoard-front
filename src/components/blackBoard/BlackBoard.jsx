import * as S from "./style";
import React from "react";
import "./blackBoardColor.css";
import BlackBoardList from "./blackBoardList";

function BlackBoard() {
  const data = {
    id: 1,
    nickname: "서현",
    content: `   이건 텍스트 에디터....<div>안녕안녕</div>
    <div>왜이런 비극이 자꾸...일어나지</div>
    <div>
      왜 색깔먹이<span class="red">면 엔터가 안될까</span>요?
    </div>`,
    font: 1,
    stickers: [
      { num: 1, positionX: 0, positionY: 0, img: 1 },
      { num: 2, positionX: 4, positionY: 6, img: 2 }
    ]
  };
  const loadContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  };
  return (
    <S.BlackBoardWrapper>
      <S.BlackBoardNickName>{data.nickname}</S.BlackBoardNickName>
      <S.BlackBoardContent>{loadContent()}</S.BlackBoardContent>

      {data.stickers.map(sticker => (
        <S.Sticker
          key={sticker.num}
          $position_x={sticker.positionX + "em"}
          $position_y={sticker.positionY + "em"}
          src={`/sticker/${sticker.img}.svg`}
        />
      ))}
    </S.BlackBoardWrapper>
  );
}

export default BlackBoard;
