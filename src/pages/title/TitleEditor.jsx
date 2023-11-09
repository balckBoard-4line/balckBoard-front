import React, { useEffect } from "react";
import * as S from "./style";
import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";
import Button from "../../components/common/button/Button";

import { API } from "../../api/axios";
import { useParams } from "react-router-dom";
function TitleEditor() {
  const data = {
    url: "dkdjfkewoo1we3", // 링크 이미지에서 사용
    title: "제목입니다.",
    introduction: "칠판 소개입니다.",
    graduateDate: "2024-02-01"
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#486455" }}>
      <S.PageContent>
        <BlackBoardEditor type={"title"} data={data} />
      </S.PageContent>

      <div onClick={handelsubmit}>클릭</div>
      <Button content={"이렇게 할래요"} type={"white"} />
    </S.PageWrapper>
  );
}

export default TitleEditor;
