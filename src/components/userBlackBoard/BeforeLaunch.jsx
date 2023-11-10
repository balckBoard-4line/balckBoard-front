import React, { useState, useEffect } from "react";
import * as S from "./style";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

function BeforeLaunch({ data, getIsLaunch }) {
  const params = useParams();

  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const timeDiff = moment(data.graduateDate).valueOf() - moment().valueOf();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      if (timeDiff < 0) {
        getIsLaunch(true);
      }
      setTimeLeft({ day: days, hour: hours, minute: minutes, second: seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const handleCopyURL = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        alert("URL이 클립보드에 복사되었습니다: " + urlToCopy);
      })
      .catch(error => {
        console.error("URL 복사에 실패했습니다: " + error);
      });
  };
  return (
    <div>
      <S.BfWrapper>
        <div>
          <S.Bfnum1>
            <S.Bfnum1timewrp>
              <S.Bfnum1time>
                <S.Bfnum1time1>칠판 공개까지</S.Bfnum1time1>
                <S.Bfnum1time2>
                  {timeLeft.day}일 {timeLeft.hour}시간 {timeLeft.minute}분{" "}
                  {timeLeft.second}초
                </S.Bfnum1time2>
              </S.Bfnum1time>
            </S.Bfnum1timewrp>
            <S.Bfnum1link>
              <S.Bfnum1linkwrp>
                <img
                  src="/LinkIcon.png"
                  alt="Link Icon"
                  onClick={handleCopyURL}
                  style={{ cursor: "pointer" }}
                />
              </S.Bfnum1linkwrp>
            </S.Bfnum1link>
          </S.Bfnum1>
          <S.Bfnum2>
            <S.Bfnum2title>{data.title}</S.Bfnum2title>
            <br />
            <S.Bfnum2subtitle>{data.introduction}</S.Bfnum2subtitle>
          </S.Bfnum2>
          <S.Bfnum3>
            <S.Bfnum3in1wrp>
              <Link
                to={`/letterCreate/${params.url}`}
                style={{ width: "100%", height: "100%" }}
              >
                <S.Bfnum3in1>칠판 편지남기기</S.Bfnum3in1>
              </Link>
            </S.Bfnum3in1wrp>
            <S.Bfnum3in2wrp>
              <Link
                to={`/visitors/${params.url}`}
                style={{ width: "100%", height: "100%" }}
              >
                <S.Bfnum3in2>다녀간 사람</S.Bfnum3in2>
              </Link>
            </S.Bfnum3in2wrp>
            <S.Bfnum3in3wrp>
              <Link to="/titleCreate">
                <S.Bfnum3in3>
                  <S.Bfnum3in3in1>나도 칠판 만들기</S.Bfnum3in3in1>
                  <S.Bfnum3in3in2> {">"}</S.Bfnum3in3in2>
                </S.Bfnum3in3>
              </Link>
            </S.Bfnum3in3wrp>
          </S.Bfnum3>
          <S.Bfnum4inbrown />
        </div>
      </S.BfWrapper>
    </div>
  );
}

export default BeforeLaunch;
