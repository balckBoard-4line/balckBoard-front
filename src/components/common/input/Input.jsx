import React, { useState } from "react";
import * as S from "./style";

function Input({
  title = "",
  maxcount,
  font,
  placeholder,
  showInputCount = true,
  getValue
}) {
  const [inputCount, setInputCount] = useState(0);
  const inputHandeler = e => {
    setInputCount(e.target.value.length);
    getValue(e.target.value);
  };
  return (
    <S.InputContentWrapper>
      <S.InputTitle>{title}</S.InputTitle>
      <S.InputWrapper>
        <S.InputArea
          $font={font}
          onChange={inputHandeler}
          maxLength={maxcount - 1}
          placeholder={placeholder}
        />
        {showInputCount && (
          <S.InputCount>
            {inputCount} / {maxcount}
          </S.InputCount>
        )}
      </S.InputWrapper>
    </S.InputContentWrapper>
  );
}

export default Input;
