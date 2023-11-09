import React, { useState } from "react";
import * as S from "./style";

import LetterTextEditor from "../../components/letterTextEditor/LetterTextEditor";
import InputHeader from "../../components/layout/header/InputHeader";
import Button from "../../components/common/button/Button";

function LetterCreatePage() {
  const [nickname, setNickname] = useState("");
  const getNickname = nickname => {
    setNickname(nickname);
  };

  const [doSubmit, setDoSubmit] = useState(false);
  const getDoSubmit = bool => {
    setDoSubmit(bool);
  };

  const handlePost = () => {
    setDoSubmit(true);
  };

  return (
    <S.PageWrapper style={{ backgroundColor: "#345342" }}>
      <InputHeader content={"메세지를 남겨주세요"} />
      <S.PageContent>
        <LetterTextEditor
          nickname={nickname}
          getNickname={getNickname}
          doSubmit={doSubmit}
          getDoSubmit={getDoSubmit}
        />
      </S.PageContent>

      {nickname.length != 0 ? (
        <Button
          content={"이렇게 할게요"}
          type={"white"}
          buttonHandeler={handlePost}
        />
      ) : (
        <Button content={"내용을 전부 입력해주세요!"} type={"grey"} />
      )}
    </S.PageWrapper>
  );
}

export default LetterCreatePage;
