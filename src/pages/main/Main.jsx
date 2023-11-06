import BlackBoardList from "../../components/blackBoard/blackBoardList";
import * as S from "./style";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FloatingText = styled.div`
  font-size: 15px;
  font-weight: 600;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: end;
  animation: ${floatingAnimation} 2s linear infinite;
`;

function Main() {
  const initialText = "지금까지 개의 칠판이 만들어졌어요!";
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (textIndex < initialText.length) {
        setDisplayedText(initialText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(textInterval);
      }
    }, 70); // 글자가 나타나는 간격(ms)
    return () => {
      clearInterval(textInterval);
    };
  }, [textIndex]);

  return (
    <S.MainWrapper>
      <FloatingText>{displayedText}</FloatingText>
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
