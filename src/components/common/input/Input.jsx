import React, { useState } from "react";
import * as S from "./style";

function Input({
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
  );
}

export default Input;
