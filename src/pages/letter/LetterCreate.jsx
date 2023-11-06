import React from "react";
import * as S from "./style";

import LetterTextEditor from "../../components/letterTextEditor/LetterTextEditor";
import InputHeader from "../../components/layout/header/InputHeader";
import Button from "../../components/common/button/Button";

function LetterCreatePage() {
  return (
    <S.PageWrapper style={{ backgroundColor: "#345342" }}>
      <InputHeader content={"메세지를 남겨주세요"} />
      <S.PageContent>
        <LetterTextEditor />
      </S.PageContent>

      <Button content={"다음으로 넘어가기"} type={"white"} />
    </S.PageWrapper>
  );
}

export default LetterCreatePage;
