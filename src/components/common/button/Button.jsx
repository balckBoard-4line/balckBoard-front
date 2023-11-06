import React from "react";
import * as S from "./style";

function Button({ content, type, buttonHandeler }) {
  return (
    <S.ButtonWrapper>
      <S.ButtonArea $type={type}>{content}</S.ButtonArea>
    </S.ButtonWrapper>
  );
}

export default Button;
