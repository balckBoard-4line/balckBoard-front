import React from "react";
import * as S from "./style";
import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";
import Button from "../../components/common/button/Button";

function LetterEditor() {
  return (
    <S.PageWrapper style={{ backgroundColor: "#486455" }}>
      <S.PageContent>
        <BlackBoardEditor />
      </S.PageContent>
      <Button content={"이렇게 할래요"} type={"white"} />
    </S.PageWrapper>
  );
}

export default LetterEditor;
