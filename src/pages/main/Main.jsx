import BlackBoardList from "../../components/blackBoard/blackBoardList";
import * as S from "./style";

import { Link } from "react-router-dom";

import React from "react";

function Main() {
  return (
    <S.MainWrapper>
      <S.MainBoardnum>지금까지 개의 칠판이 만들어졌어요! </S.MainBoardnum>

      <S.MainBoardnum2>
        <S.MainBoardnum2logo>
          <Link to={`blackBoard/${1}`}>칠판 바로가기</Link>
          <br />
          <Link to={`titleCreate/${1}`}>칠판 만들기</Link>
          <br />
          <Link to={`titleEditor/${1}`}>칠판 꾸미기 바로가기</Link>
          <br />
          <Link to={`letterCreate/${1}`}>편지 쓰기 바로가기</Link>
          <br />
          <Link to={`letterEditor/${1}`}>편지 꾸미기 바로가기</Link>
          <br />
          <Link to={`bflaunch/${1}`}>공개전 바로가기</Link>
          <br />
          <Link to={`visitors/${1}`}>편지쓴명단 바로가기</Link>
        </S.MainBoardnum2logo>
      </S.MainBoardnum2>
      <S.MainBoardnum3>
        <S.MainBoardnum3crtbrdwrp>
          <Link to="/titleCreate/1" style={{ width: "100%", height: "100%" }}>
            <S.MainBoardnum3createboard>
              내 칠판 만들기
            </S.MainBoardnum3createboard>
          </Link>
        </S.MainBoardnum3crtbrdwrp>

        <S.MainBoardnum3tu>이용약관</S.MainBoardnum3tu>
      </S.MainBoardnum3>
    </S.MainWrapper>
  );
}

export default Main;
