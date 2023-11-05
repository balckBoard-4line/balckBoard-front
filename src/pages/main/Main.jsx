import BlackBoardList from "../../components/blackBoard/blackBoardList";
import * as S from "./style";

import { Link } from "react-router-dom";

import React from "react";

function Main() {
  return (
    <S.MainWrapper>
      <S.MainTitle>메인페이지</S.MainTitle>
      <Link to={`blackBoard/${1}`}>칠판 바로가기</Link>
      <Link to={`letterCreate/${1}`}>편지 쓰기 바로가기</Link>
    </S.MainWrapper>
  );
}

export default Main;
