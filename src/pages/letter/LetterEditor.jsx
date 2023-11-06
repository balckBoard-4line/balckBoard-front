import React from "react";
import * as S from "./style";
import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";

function LetterEditor() {
  return (
    <S.PageWrapper>
      <S.PageContent>
        <BlackBoardEditor />
      </S.PageContent>
    </S.PageWrapper>
  );
}

export default LetterEditor;
