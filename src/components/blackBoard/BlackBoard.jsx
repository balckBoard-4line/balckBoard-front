import * as S from "./style";
import React from "react";

function BlackBoard() {
  const data = {
    id: 1,
    nickname: "서현",
    font: "Dongguk",
    content: `이건 텍스트 에디터....
    <div>왜구현이 안되지...</div>
    
    <div>진짜 마음개힘들다</div>

    <div>
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
    </div>
    <div>
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
      왜 색깔먹이<span class="pink">면 엔터가 안될까</span>요?
    </div>`,

    stickers: [
      { num: 1, positionX: 0, positionY: 0, img: 1, width: 12 },
      { num: 2, positionX: 4, positionY: 6, img: 2, width: 4 }
    ]
  };
  const loadContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  };
  return (
    <S.BlackBoardWrapper $font={data.font}>
      <S.BlackBoardNickName>{data.nickname}</S.BlackBoardNickName>
      <S.BlackBoardContent>{loadContent()}</S.BlackBoardContent>

      {data.stickers.map(sticker => (
        <S.Sticker
          key={sticker.num}
          $position_x={sticker.positionX + "em"}
          $position_y={sticker.positionY + "em"}
          src={`/sticker/${sticker.img}.svg`}
          $img_width={sticker.width + "em"}
        />
      ))}
    </S.BlackBoardWrapper>
  );
}

export default BlackBoard;
