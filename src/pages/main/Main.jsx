import * as S from "./style";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsGithub, BsInstagram } from "react-icons/bs";

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
  height: 10vh;
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
      <Link to={`userBlackBoard/test-url`}>칠판 바로가기</Link>
      <br />
      <Link to={`titleCreate`}>칠판 만들기</Link>
      <br />
      <Link to={`titleEditor`}>칠판 꾸미기 바로가기</Link>
      <br />
      <Link to={`letterCreate/test-url`}>편지 쓰기 바로가기</Link>
      <br />
      <Link to={`letterEditor/test-url`}>편지 꾸미기 바로가기</Link>
      <br />
      <Link to={`visitors/test-url`}>편지쓴명단 바로가기</Link>
      <FloatingText>{displayedText}</FloatingText>
      <S.MainBoardnum2>
        <S.MainBoardnum2logo>
          <img
            src="/MainLogo.png"
            alt="Step2_1"
            width={"100%"}
            height={"100%"}
          />
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

        <S.MainBoardnum3tu />
      </S.MainBoardnum3>
      <S.MainIntro>
        <S.MainIntrobold>그때 그 시절, 칠판 편지</S.MainIntrobold>
        <br />
        <br />
        초등학교,중학교,고등학교 졸업식,
        <br />
        반 친구들이 함께 모여 꾸미던 칠판 편지!
        <br />
        <br />
        그때의 감성을 살린,온라인 칠판 편지입니다!
      </S.MainIntro>
      <S.Mainstep1>
        <S.Mainstep1wrp>
          <S.MainIntrogreencolor>Step 1</S.MainIntrogreencolor>
          <br />
          <S.MainIntrobold>칠판 등록</S.MainIntrobold>
          <br />
          <br />
          함께 꾸며나갈 칠판을 등록해주세요.
          <br />
          이때, 칠판의 주소가 어디인지 까먹지 않도록
          <br />
          이메일을 보내드립니다!
        </S.Mainstep1wrp>
        <S.Mainstep1image>
          <img src="/Step1.png" alt="Step1" width={"32%"} height={"60%"} />
        </S.Mainstep1image>
      </S.Mainstep1>
      <S.Mainstep2>
        <S.Mainstep2wrp>
          <S.MainIntrogreencolor>Step 2</S.MainIntrogreencolor>
          <br />
          <S.MainIntrobold>칠판 편지 작성</S.MainIntrobold>
          <br />
          <br />
          칠판에 끝맺음을 축하하고,시작을 응원하는
          <br />
          따듯한 한마디를 작성해주세요!
          <br />
          작성한 칠판 편지를 스티커로 꾸밀 수 있답니다.
        </S.Mainstep2wrp>
        <S.Mainstep2image>
          <img src="/Step2_1.png" alt="Step2_1" width={"32%"} height={"55%;"} />
          <img src="/Step2_2.png" alt="Step2_2" width={"32%"} height={"55%;"} />
        </S.Mainstep2image>
      </S.Mainstep2>
      <S.Mainstep3>
        <S.Mainstep3wrp>
          <S.MainIntrogreencolor>Step 3</S.MainIntrogreencolor>
          <br />
          <S.MainIntrobold>디데이 카운트</S.MainIntrobold>
          <br />
          <br />
          사전에 지정한 날짜에 칠판편지가 공개됩니다!
          <br />
          디데이를, 칠판에 다녀간 사람들을 확인할 수 있어요.
          <br />
          기분 좋은 졸업식 되세요!
        </S.Mainstep3wrp>
        <S.Mainstep3image>
          <img src="/Step3_1.png" alt="Step3_1" width={"32%"} height={"65%;"} />
          <img src="/Step3_2.png" alt="Step3_2" width={"32%"} height={"65%;"} />
        </S.Mainstep3image>
        <S.Mainstep3gocreate>
          <Link to="/titleCreate/1">지금 바로 칠판을 만들어보세요! {">"}</Link>
        </S.Mainstep3gocreate>
      </S.Mainstep3>
      <S.Mainaboutus>
        <S.Mainaboutuswrp>
          <S.MainIntrobold>About US</S.MainIntrobold>
          <br />
          <br />
          졸축위-졸업 축하위원회{")"}
          <br />
          심서현 강민지 곽호은 김동환 이가현
          <br />
          <br />
          <S.MainAboutLogo>
            <BsInstagram />
            <BsGithub />
          </S.MainAboutLogo>
        </S.Mainaboutuswrp>
      </S.Mainaboutus>
    </S.MainWrapper>
  );
}

export default Main;
