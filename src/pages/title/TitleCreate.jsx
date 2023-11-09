import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";

function TitleCreate() {
  const [title, setTitle] = useState("");
  const getTitle = title => {
    setTitle(title);
  };

  const [introduction, setIntroduction] = useState("");
  const getIntroduction = introduction => {
    setIntroduction(introduction);
  };

  const [email, setEmail] = useState("");
  const getEmail = email => {
    setEmail(email);
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setSelectedDate(getCurrentDate());
    setSelectedTime(getCurrentTime());
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date); // 날짜 업데이트
    console.log("Selected Date after update:", date);
  };

  const handleTimeChange = time => {
    setSelectedTime(time); // 시간 업데이트
    console.log("Selected Time after update:", time);
  };

  const navigate = useNavigate();

  const handleGoToLetterEditor = () => {
    navigate("/titleEditor", {
      state: {
        title: title,
        introduction: introduction,
        email: email,
        graduateDate: `${selectedDate}-${selectedTime.replace(":", "-")}`
      }
    });
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
            getValue={getTitle}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>칠판의 소개</S.BlackBoardContent>
          <Input
            maxcount={20}
            font="Pretendard"
            placeholder={"칠판의 소개를 입력해주세요."}
            getValue={getIntroduction}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>칠판을 받아보실 이메일</S.BlackBoardContent>
          <Input
            maxcount={999999999}
            font="Pretendard"
            placeholder={"example@example.com"}
            getValue={getEmail}
            showInputCount={false}
          />
        </S.BlackBoardInput>

        <S.BlackBoardInput>
          <S.BlackBoardContent>졸업 날짜</S.BlackBoardContent>
          <S.BlackBoardInputWrapper>
            <S.BlackBoardInputArea
              type="date"
              value={selectedDate}
              onChange={event => handleDateChange(event.target.value)}
            />
            <S.BlackBoardInputArea
              type="time"
              value={selectedTime}
              onChange={event => handleTimeChange(event.target.value)}
            />
          </S.BlackBoardInputWrapper>
        </S.BlackBoardInput>
      </S.PageContent>

      <Button
        content={"이렇게 할게요"}
        type={"white"}
        buttonHandeler={handleGoToLetterEditor}
      />
    </S.PageWrapper>
  );
}

export default TitleCreate;
