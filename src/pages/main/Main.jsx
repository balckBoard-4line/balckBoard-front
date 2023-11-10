import * as S from "./style";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Button from "../../components/common/button/Button";
import { API } from "../../api/axios";

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
  padding: 40px 0;

  display: flex;
  justify-content: center;
  animation: ${floatingAnimation} 2s linear infinite;
`;

function Main() {
  const [data, setData] = useState(0);
  const fetchLanternsData = async () => {
    try {
      const response = await API.get(`api/blackboards`);

      setData(response.data.blackboardCount);
    } catch (error) {
      console.log("에러~", error);
    }
  };
  useEffect(() => {
    fetchLanternsData();
  }, []);

  const initialText = "지금까지 " + data + "개의 칠판이 만들어졌어요!";
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
      <S.TitleWrapper>
        <FloatingText>{displayedText}</FloatingText>
        <S.LogoWrapper src="/MainLogo.png" />
        <Link to={"/titleCreate"}>
          <Button content={"내 칠판 만들기"} type={"white"} />
        </Link>

        <div
          style={{
            backgroundColor: "#715948",
            width: "100%",
            height: "20px",
            marginTop: "20px"
          }}
        />
      </S.TitleWrapper>

      <S.ContentWhiteWrapper>
        <S.ContentTitle>그때 그 시절 칠판 편지</S.ContentTitle>
        <S.ContentContent>
          초등학교, 중학교, 고등학교 졸업식.
          <br /> 반 친구들이 함께 모여 꾸미던 칠판 편지!
          <br /> <br />
          그때의 감성을 살린, 온라인 칠판 편지입니다!
          <br />
        </S.ContentContent>
      </S.ContentWhiteWrapper>

      <S.ContentGreyList>
        <S.ContentGreyWrapper>
          <S.ContentStep>Step 1</S.ContentStep>
          <S.ContentTitle>칠판 등록</S.ContentTitle>
          <S.ContentContent>
            함께 꾸며나갈 칠판을 등록해주세요.
            <br />
            이때, 칠판의 주소가 어디인지 까먹지 않도록
            <br />
            이메일을 보내드립니다!
          </S.ContentContent>
          <S.ContentImg src="/Step1.png" />
        </S.ContentGreyWrapper>

        <S.ContentGreyWrapper>
          <S.ContentStep>Step 2</S.ContentStep>
          <S.ContentTitle>칠판 편지 작성</S.ContentTitle>
          <S.ContentContent>
            칠판에 끝맺음을 축하하고, 시작을 응원하는
            <br />
            따뜻한 한마디를 작성해주세요!
            <br />
            작성한 칠판 편지를 스티커로 꾸밀 수 있답니다.
          </S.ContentContent>
          <S.ContentImg src="/Step2.png" />
        </S.ContentGreyWrapper>

        <S.ContentGreyWrapper>
          <S.ContentStep>Step 3</S.ContentStep>
          <S.ContentTitle>디데이 카운트</S.ContentTitle>
          <S.ContentContent>
            사전에 지정한 날짜에 칠판편지가 공개됩니다!
            <br />
            디데이를, 칠판에 다녀간 사람들을 확인할 수 있어요.
            <br />
            기분 좋은 졸업식 되세요!
          </S.ContentContent>
          <S.ContentImg src="/Step3.png" />
        </S.ContentGreyWrapper>
      </S.ContentGreyList>

      <S.FooterWrapper>
        <S.FooterTitle>About US</S.FooterTitle>
        <S.FooterContent>
          졸축위 - 졸업 축하위원회
          <br />
          심서현 강민서 곽호은 김동환 이가현
        </S.FooterContent>

        <S.FooterIconList>
          <S.FooterIcon src="/Icon_Insta.svg" />
          <S.FooterIcon src="/Icon_GIt.svg" />
        </S.FooterIconList>
      </S.FooterWrapper>
    </S.MainWrapper>
  );
}

export default Main;
