import React from "react";
import * as S from "./style";

function BlackBoardStickerModal({ getShowStickerModal, getSticker }) {
  const StickerCount = 3;
  const clickHandeler = () => {
    getShowStickerModal(false);
  };
  const clickStickerHandeler = e => {
    getSticker(e.target.title);
  };
  return (
    <S.StickerModalWrapper>
      <S.StickerModalCloseBtn onClick={clickHandeler} src={"/Icon_Close.png"} />
      <S.StickerListWrapper>
        <S.StickerList>
          {Array(StickerCount)
            .fill(0)
            .map((_, i) => (
              <S.StickerModalSticker
                key={i + 1}
                title={i + 1}
                src={`/sticker/${i + 1}.svg`}
                onClick={clickStickerHandeler}
              />
            ))}
        </S.StickerList>
      </S.StickerListWrapper>
    </S.StickerModalWrapper>
  );
}

export default BlackBoardStickerModal;
