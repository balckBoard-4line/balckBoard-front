import React from "react";
import * as S from "./style";
import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";
import Button from "../../components/common/button/Button";

function LetterEditor() {
  const data = {
    blackboardId: "1rkfj3irji33",
    nickname: "편지 작성자",
    content: `<span ">그동안 고생 많았어. 항상 노력해줘서 고마웠어.</span><div><span >힘들 텐데 잘 견뎌 내주어서 훌륭했어.&nbsp;</span></div><div><span >아무 일 없이 잘 지내주어서 대단했어.&nbsp;</span></div><div><span >이제 <span class="yellow">어떤 길을 걷더라도</span> <span class="pink">이제 어떤 꿈을 꾸더라도 </span>네가 바라던 삶과 목표를 향해 천천히 조심스럽게 차분하게<span class="blue"> 나아갈 수 있기를 바란다.</span></span></div> `,
    font: 1,
    align: "right"
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#486455" }}>
      <S.PageContent>
        <BlackBoardEditor type={"letter"} data={data} />
      </S.PageContent>
      <Button content={"이렇게 할래요"} type={"white"} />
    </S.PageWrapper>
  );
}

export default LetterEditor;
