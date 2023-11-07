import * as S from "./style";
import React from "react";

function BlackBoard({ type, data }) {
  const loadContent = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  };
  return (
    <S.BlackBoardWrapper $font={data?.font}>
      {type == "letter" ? (
        <>
          {/* 편지일경우 */}
          <S.BlackBoardNickName $align={data.align}>
            {data.nickname}
          </S.BlackBoardNickName>
          <S.BlackBoardContent $align={data.align}>
            {loadContent()}
          </S.BlackBoardContent>
        </>
      ) : (
        <>
          {/* 타이틀일경우 */}
          <S.BlackBoardTitle>{data.title}</S.BlackBoardTitle>
          <S.BlackBoardIntroduction>
            {data.introduction}
          </S.BlackBoardIntroduction>
        </>
      )}

      {data.stickers?.map(sticker => (
        <S.Sticker
          title={sticker.num}
          src={`/sticker/${sticker.img}.svg`}
          $position_x={sticker.positionX + "em"}
          $position_y={sticker.positionY + "em"}
          $img_width={sticker.width + "em"}
          $img_angle={sticker.angle + "deg"}
          $img_mirror={sticker.mirror}
          style={{ zIndex: `${sticker.num}` }}
        />
      ))}
    </S.BlackBoardWrapper>
  );
}

export default BlackBoard;
