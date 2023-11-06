import React from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";

function BlackBoardList() {
  const emSize = (useInnerWidth() / 375) * 10;

  return (
    <S.BlackBoardListWrapper $emsize={emSize + "px"}></S.BlackBoardListWrapper>
  );
}

export default BlackBoardList;
