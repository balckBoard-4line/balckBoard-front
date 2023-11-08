import React, { useState } from "react";
import * as S from "./style";

import LetterTextEditor from "../../components/letterTextEditor/LetterTextEditor";
import InputHeader from "../../components/layout/header/InputHeader";
import Button from "../../components/common/button/Button";

function LetterCreatePage() {
  const [doSubmit, setDoSubmit] = useState(false);

  const handlePost = () => {
    setDoSubmit(true);
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#345342" }}>
      <InputHeader content={"메세지를 남겨주세요"} />
      <S.PageContent>
        <LetterTextEditor doSubmit={doSubmit} />
      </S.PageContent>

      <Button
        content={"다음으로 넘어가기"}
        type={"white"}
        buttonHandeler={handlePost}
      />
    </S.PageWrapper>
  );
}

export default LetterCreatePage;
