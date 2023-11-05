import * as S from "./style";
import React from "react";
import "./blackBoardColor.css";

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
      { num: 1, positionX: 2, positionY: 3, img: 1 },
      { num: 2, positionX: 2, positionY: 3, img: 2 }
    ]
  };
  return (
    <S.BlackBoardWrapper>
      <S.BlackBoardNickName>닉네임</S.BlackBoardNickName>
      <S.BlackBoardContent></S.BlackBoardContent>
    </S.BlackBoardWrapper>
  );
}

export default BlackBoard;
