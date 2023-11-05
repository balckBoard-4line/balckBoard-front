import React from "react";
import * as S from "./style";

function StickerEditorHeader({ getShowStickerModal }) {
  const clickHandeler = () => {
    getShowStickerModal(true);
  };
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        칠판을 꾸며주세요
        <S.HeaderBtn onClick={clickHandeler} src={"/Icon_Sticker.png"} />
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}

export default StickerEditorHeader;
