import React, { useState } from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import Input from "../common/input/Input";

function LetterTextEditor() {
  const emSize = (useInnerWidth() / 375) * 10;

  const [currentFont, setCurrentFont] = useState("Alien");
  const [currentColor, setCurrentColor] = useState("white");

  const colors = [
    { name: "white", code: "#FFFFFF" },
    { name: "pink", code: "#ff9595" },
    { name: "yellow", code: "#fcf083" },
    { name: "blue", code: "#88d0f9" }
  ];
  const fonts = [
    { name: "Alien", korName: "외계인체" },
    { name: "Maple", korName: "메이플스토리체" },
    { name: "Clover", korName: "Y클로버체" },
    { name: "Dongguk", korName: "동국체" },
    { name: "Art", korName: "전주공예명조체" },
    { name: "Ssam", korName: "차쌤체" }
  ];

  const fontColor = e => {
    //선택 영역 찾기
    var selected = window.getSelection().getRangeAt(0);

    //b 태그 생성
    var node = document.createElement("span");
    //b 태그 내부에 선택영역의 text 넣기
    node.className = e.target.title;
    node.innerText = selected;

    //선택영역을 지우고 생성한 b태그를 넣어 바꾸기
    selected.deleteContents();
    selected.insertNode(node);
  };

  const fontBtnHandeler = e => {
    setCurrentFont(e.target.title);
  };
  const colorBtnHandeler = e => {
    setCurrentColor(e.target.title);
    fontColor(e);
  };

  return (
    <>
      {/* ----닉네임 입력 */}
      <Input maxcount={15} font={currentFont} />

      {/* ----텍스트 에디터 */}
      {/* 컬러리스트 */}
      <S.colorListWrapper>
        <S.colorList>
          {colors.map(color => (
            <S.colorBtn
              key={color.name}
              title={color.name}
              style={{ backgroundColor: `${color.code}` }}
              onClick={colorBtnHandeler}
            >
              <S.colorCheck
                title={color.name}
                src={`/Icon_Check.png`}
                $nowselect={color.name == currentColor}
              />
            </S.colorBtn>
          ))}
        </S.colorList>
      </S.colorListWrapper>
      {/* 컬러리스트 */}

      {/* 텍스트 에디터 */}
      <S.LetterTextEditorWrapper $font={currentFont} $emsize={emSize + "px"}>
        <S.LetterTextEditorInputWrapper>
          <S.LetterTextEditorInput
            contentEditable={true}
            suppressContentEditableWarning={true}
          />
        </S.LetterTextEditorInputWrapper>
      </S.LetterTextEditorWrapper>
      {/* 텍스트 에디터 */}

      {/* 폰트선택 */}
      <S.fontListWrapper>
        <S.fontList>
          {fonts.map(font => (
            <S.fontBtn
              key={font.name}
              $font={font.name}
              title={font.name}
              $nowselect={currentFont == font.name}
              onClick={fontBtnHandeler}
            >
              {font.korName}
            </S.fontBtn>
          ))}
        </S.fontList>
      </S.fontListWrapper>
      {/* 폰트선택 */}
    </>
  );
}

export default LetterTextEditor;
