import * as S from "./style";
import React from "react";
import "./blackBoardColor.css";

function BlackBoard() {
  return (
    <S.BlackBoardWrapper>
      <S.BlackBoardNickName>닉네임</S.BlackBoardNickName>
      <S.BlackBoardContent>
        <div>내용무궁화삼천리 화려강산 대한사람 대한으로 길이 보전하세</div>
        <div>
          내용무궁화삼<span className="red">빨강</span>천리 화려강산 대한사람
          길이 보전하세
        </div>
        <div>내용무궁화삼천리 화려강산 대한사람 대한으로 길이 보전하세</div>
      </S.BlackBoardContent>
    </S.BlackBoardWrapper>
  );
}

export default BlackBoard;
