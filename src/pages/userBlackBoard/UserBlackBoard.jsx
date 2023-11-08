import React, { useState, useEffect } from "react";
import moment from "moment";

import * as S from "./style";
import BeforeLaunch from "../../components/userBlackBoard/BeforeLaunch";
import AfterLaunch from "../../components/userBlackBoard/AfterLaunch";

function UserBlackBoard() {
  const data = {
    url: "dkdjfkewoo1we3", // 링크 이미지에서 사용
    title: "제목입니다.",
    introduction: "칠판 소개입니다.",
    graduateDate: "2023-11-08 01:07:00",
    letters: [
      {
        blackboardId: "1rkfj3irji33",
        nickname: "편지 작성자",
        content: `<span ">그동안 고생 많았어. 항상 노력해줘서 고마웠어.</span><div><span >힘들 텐데 잘 견뎌 내주어서 훌륭했어.&nbsp;</span></div><div><span >아무 일 없이 잘 지내주어서 대단했어.&nbsp;</span></div><div><span >이제 <span class="yellow">어떤 길을 걷더라도</span> <span class="pink">이제 어떤 꿈을 꾸더라도 </span>네가 바라던 삶과 목표를 향해 천천히 조심스럽게 차분하게<span class="blue"> 나아갈 수 있기를 바란다.</span></span></div> `,
        font: "Maple",
        align: "right",
        stickers: [
          {
            num: 1,
            positionX: 3,
            positionY: 5,
            img: 4,
            width: 10
          },
          {
            num: 2,
            positionX: 23,
            positionY: 5,
            img: 5,
            width: 12
          }
        ]
      },
      {
        blackboardId: "1rkfjdafwe3iri33",
        nickname: "편지 작성자",
        content: `<span ">그동안 고생 많았어. 항상 노력해줘서 고마웠어.</span><div><span >힘들 텐데 잘 견뎌 내주어서 훌륭했어.&nbsp;</span></div><div><span >아무 일 없이 잘 지내주어서 대단했어.&nbsp;</span></div><div><span >이제 <span class="yellow">어떤 길을 걷더라도</span> <span class="pink">이제 어떤 꿈을 꾸더라도 </span>네가 바라던 삶과 목표를 향해 천천히 조심스럽게 차분하게<span class="blue"> 나아갈 수 있기를 바란다.</span></span></div> `,
        font: "Dongguk",
        align: "center",
        stickers: [
          {
            num: 1,
            positionX: 3,
            positionY: 5,
            img: 10,
            width: 10,
            angle: 30,
            mirror: 1
          },
          {
            num: 2,
            positionX: 23,
            positionY: 6,
            img: 5,
            width: 12,
            angle: -70,
            mirror: -1
          }
        ]
      }
    ],
    stickers: [
      {
        num: 1,
        positionX: 0,
        positionY: 0,
        img: 2,
        width: 10,
        angle: -70,
        mirror: -1
      },
      {
        num: 2,
        positionX: 13,
        positionY: 5,
        img: 4,
        width: 10,
        angle: -70,
        mirror: 1
      }
    ]
  };

  //졸업날짜가 지났는지 확인하는 함수
  const [isLaunch, setIsLaunch] = useState(false);
  useEffect(() => {
    const deadline = moment(data.graduateDate);
    const currentTime = moment();

    setIsLaunch(deadline < currentTime);
  }, []);
  const getIsLaunch = bool => {
    setIsLaunch(bool);
  };

  return (
    <S.PageWrapper style={{ position: isLaunch ? "" : "fixed" }}>
      {isLaunch ? (
        <AfterLaunch data={data} />
      ) : (
        <BeforeLaunch getIsLaunch={getIsLaunch} data={data} />
      )}
    </S.PageWrapper>
  );
}

export default UserBlackBoard;
