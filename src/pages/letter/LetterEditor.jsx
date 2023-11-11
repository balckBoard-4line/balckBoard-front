import React, { useState } from "react";
import * as S from "./style";

import BlackBoardEditor from "../../components/blackBoard/BlackBoardEditor";
import Button from "../../components/common/button/Button";

import { useLocation } from "react-router-dom";

function LetterEditor() {
  const location = useLocation();
  const data = { ...location.state };

  const [doSubmit, setDoSubmit] = useState(false);

  const handlePost = () => {
    setDoSubmit(true);
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#486455" }}>
      <S.PageContent>
        <BlackBoardEditor
          doSubmit={doSubmit}
          getDoSubmit={bool => setDoSubmit(bool)}
          type={"letter"}
          data={data}
        />
      </S.PageContent>
      <Button content={"이렇게 할래요"} type={"white"} onClick={handlePost} />
    </S.PageWrapper>
  );
}

export default LetterEditor;
