import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import Input from "../common/input/Input";
import { useNavigate, useParams } from "react-router-dom";

function LetterTextEditor({ doSubmit }) {
  const params = useParams();

  //===반응형 사이즈 측정
  const emSize = (useInnerWidth() / 375) * 10;

  //---제출관련
  // submit이 진행되면, 데이터를 전송한다.
  // useNavigate로 텍스트 값을 넘겨줘 스티커 페이지에서 꾸밀 수 있게 한다
  const navigate = useNavigate();

  useEffect(() => {
    if (doSubmit) {
      navigate(`/letterEditor/${params.url}`, {
        state: {
          nickname: nickname,
          content: TextEditorRef.current.outerHTML.replace(
            "contenteditable=",
            "class="
          ),
          font: currentFont,
          align: currentAlign
        }
      });
    }
  }, [doSubmit]);

  //--------------제출될 데이터들...

  const [nickname, setNickname] = useState("");
  const getNickname = nickname => {
    setNickname(nickname);
  };

  const [currentFont, setCurrentFont] = useState("Alien");
  const [currentColor, setCurrentColor] = useState("white");
  const [currentAlign, setCurrentAlign] = useState("left");

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

  const aligns = ["left", "center", "right"];

  const fontBtnHandeler = e => {
    setCurrentFont(e.target.title);
  };
  const colorBtnHandeler = e => {
    setCurrentColor(e.target.title);
    fontColor(e);
  };
  const alignBtnHandeler = e => {
    setCurrentAlign(e.target.title);
  };

  //---글자 색상변경하기
  const fontColor = e => {
    //선택 영역 찾기
    var selected = window.getSelection().getRangeAt(0);

    var node = document.createElement("span");

    node.className = e.target.title;
    node.innerText = selected;

    selected.deleteContents();
    selected.insertNode(node);
  };

  const clickTextEditor = e => {
    var selected = window.getSelection().anchorNode.parentNode.className;

    if (
      selected == "pink" ||
      selected == "yellow" ||
      selected == "blue" ||
      selected == "white"
    ) {
      setCurrentColor(selected);
    } else {
      setCurrentColor("white");
    }
  };

  const TextEditorRef = useRef();

  return (
    <>
      {/* ----닉네임 입력 */}
      <Input
        placeholder={"닉네임을 남겨주세요."}
        maxcount={15}
        font={currentFont}
        getValue={getNickname}
      />

      {/* ----텍스트 에디터 */}
      <S.StyleEditorWrapper>
        {/* 컬러리스트 */}
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
        {/* 컬러리스트 */}

        {/* 정렬리스트 */}
        <S.alignList>
          {aligns.map(align => (
            <S.alignBtn
              key={align}
              title={align}
              src={`/Icon_Align_${align}.svg`}
              $nowselect={align == currentAlign}
              onClick={alignBtnHandeler}
            />
          ))}
        </S.alignList>
        {/* 정렬리스트 */}
      </S.StyleEditorWrapper>
      {/* ----텍스트 에디터 */}

      {/* 텍스트 에디터 */}
      <S.LetterTextEditorWrapper $font={currentFont} $emsize={emSize + "px"}>
        <S.LetterTextEditorInputWrapper>
          <S.LetterTextEditorInput
            style={{ textAlign: `${currentAlign}` }}
            contentEditable={true}
            suppressContentEditableWarning={true}
            ref={TextEditorRef}
            onClick={clickTextEditor}
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
