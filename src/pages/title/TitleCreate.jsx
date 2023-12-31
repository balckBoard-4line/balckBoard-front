import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import InputHeader from "../../components/layout/header/InputHeader";

function TitleCreate() {
  const [title, setTitle] = useState("");
  const getTitle = title => {
    setTitle(title);
  };

  const [introduction, setIntroduction] = useState("");
  const getIntroduction = introduction => {
    setIntroduction(introduction);
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
  };

  const handleTimeChange = time => {
    setSelectedTime(time); // 시간 업데이트
  };

  const navigate = useNavigate();

  const handleGoToLetterEditor = () => {
    navigate("/titleEditor", {
      state: {
        title: title,
        introduction: introduction,
        graduateDate: `${selectedDate} ${selectedTime + ":00"}`
      }
    });
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#345342" }}>
      <S.PageContent>
        <InputHeader content={"내 칠판 만들기"} />

        <Input
          title={"칠판의 제목"}
          maxcount={15}
          font="Pretendard"
          placeholder={"칠판의 제목을 입력해주세요."}
          getValue={getTitle}
        />

        <Input
          title={"칠판의 소개"}
          maxcount={20}
          font="Pretendard"
          placeholder={"칠판의 소개를 입력해주세요."}
          getValue={getIntroduction}
        />

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

      {title.length * introduction.length != 0 ? (
        <Button
          content={"이렇게 할게요"}
          type={"white"}
          buttonHandeler={handleGoToLetterEditor}
        />
      ) : (
        <Button content={"내용을 전부 입력해주세요!"} type={"grey"} />
      )}
    </S.PageWrapper>
  );
}

export default TitleCreate;
