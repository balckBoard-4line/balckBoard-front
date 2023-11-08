import React, { useState } from "react";
import * as S from "./style";
import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";

// import { Link } from "react-router-dom";

function TitleCreate() {
  // const [inputText, setInputText] = useState("");

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value);
  // };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#345342" }}>
      <S.PageContent>
        <S.HeaderWrapper>
          <S.HeaderContent>내 칠판 만들기</S.HeaderContent>
        </S.HeaderWrapper>

        <S.BlackBoardInput>
          <S.BlackBoardContent>칠판의 제목</S.BlackBoardContent>
          <Input
            maxcount={15}
            font="Pretendard"
            placeholder={"칠판의 제목을 입력해주세요."}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>칠판의 소개</S.BlackBoardContent>
          <Input
            maxcount={20}
            font="Pretendard"
            placeholder={"칠판의 소개를 입력해주세요."}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>칠판을 받아보실 이메일</S.BlackBoardContent>
          <Input
            maxcount={999999999}
            font="Pretendard"
            placeholder={"example@example.com"}
            showInputCount={false}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>졸업 날짜</S.BlackBoardContent>
          <S.BlackBoardInputWrapper>
            <S.BlackBoardInputArea type="date" />
            <S.BlackBoardInputArea type="time" />
          </S.BlackBoardInputWrapper>
        </S.BlackBoardInput>
      </S.PageContent>

      <Button content={"이렇게 할게요"} type={"white"} />
    </S.PageWrapper>
  );
}

export default TitleCreate;
