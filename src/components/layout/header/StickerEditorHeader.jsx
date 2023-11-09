import React from "react";
import * as S from "./style";

function StickerEditorHeader({ type, getShowStickerModal }) {
  const clickHandeler = () => {
    getShowStickerModal(true);
  };
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        {type == "title" ? "칠판 제목을 꾸며주세요" : "칠판 편지를 꾸며주세요"}

        <S.HeaderBtn onClick={clickHandeler} src={"/Icon_Sticker.png"} />
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}

export default StickerEditorHeader;
