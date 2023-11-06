import React from "react";
import * as S from "./style";

function InputHeader({ content }) {
  return (
    <S.HeaderWrapper $fixed="false">
      <S.HeaderContent>{content}</S.HeaderContent>
    </S.HeaderWrapper>
  );
}

export default InputHeader;
