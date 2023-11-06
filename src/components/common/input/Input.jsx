import React, { useState } from "react";
import * as S from "./style";

function Input({ maxcount, font }) {
  const [inputCount, setInputCount] = useState(0);
  const inputHandeler = e => {
    setInputCount(e.target.value.length);
  };
  return (
    <S.InputWrapper>
      <S.InputArea
        $font={font}
        onChange={inputHandeler}
        maxLength={maxcount - 1}
        placeholder="닉네임을 남겨주세요!"
      />
      <S.InputCount>
        {inputCount} / {maxcount}
      </S.InputCount>
    </S.InputWrapper>
  );
}

export default Input;
