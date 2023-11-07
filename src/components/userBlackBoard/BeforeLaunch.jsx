import React, { useState, useEffect } from "react";
import moment from "moment";

import { Link } from "react-router-dom";
import * as S from "./style";

function BeforeLaunch({ data, getIsLaunch }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const deadline = moment(data.graduateDate).valueOf();

    const interval = setInterval(() => {
      const currentTime = moment().valueOf();
      const timeDifference = deadline - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
      if (deadline < currentTime) {
        getIsLaunch(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = time => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <S.BfWrapper>
        <S.Bfnum1>
          <S.Bfnum1timewrp>
            <S.Bfnum1time>
              <S.Bfnum1time1>칠판 공개까지</S.Bfnum1time1>
              <S.Bfnum1time2>
                {`${formatTime(timeLeft.days)} 일 ${formatTime(
                  timeLeft.hours
                )} 시간 ${formatTime(timeLeft.minutes)} 분 ${formatTime(
                  timeLeft.seconds
                )} 초`}
              </S.Bfnum1time2>
            </S.Bfnum1time>
          </S.Bfnum1timewrp>
          <S.Bfnum1link>
            <S.Bfnum1linkwrp>
              <img src="/LinkIcon.png" alt="Link Icon" />
            </S.Bfnum1linkwrp>
          </S.Bfnum1link>
        </S.Bfnum1>
        <S.Bfnum2>
          <S.Bfnum2title>제목</S.Bfnum2title>
          <br />
          <S.Bfnum2subtitle>부제</S.Bfnum2subtitle>
        </S.Bfnum2>
        <S.Bfnum3>
          <S.Bfnum3in1wrp>
            <Link to="/titleEditor/1" style={{ width: "100%", height: "100%" }}>
              <S.Bfnum3in1>칠판 꾸며주기</S.Bfnum3in1>
            </Link>
          </S.Bfnum3in1wrp>
          <S.Bfnum3in2wrp>
            <Link to="/visitors/1" style={{ width: "100%", height: "100%" }}>
              <S.Bfnum3in2>다녀간 사람</S.Bfnum3in2>
            </Link>
          </S.Bfnum3in2wrp>
          <S.Bfnum3in3wrp>
            <Link to="/titleCreate/1">
              <S.Bfnum3in3>
                <S.Bfnum3in3in1>나도 칠판 만들기</S.Bfnum3in3in1>
                <S.Bfnum3in3in2> {">"}</S.Bfnum3in3in2>
              </S.Bfnum3in3>
            </Link>
          </S.Bfnum3in3wrp>
        </S.Bfnum3>
        <S.Bfnum4inbrown />
      </S.BfWrapper>
    </div>
  );
}

export default BeforeLaunch;
