import React from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import "./blackBoardColor.css";

function LetterTextEditor() {
  const emSize = (useInnerWidth() / 375) * 10;
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
  return (
    <S.LetterTextEditorWrapper $emsize={emSize + "px"}>
      <S.LetterTextEditorInputWrapper>
        <S.LetterTextEditorInput
          contentEditable={true}
          suppressContentEditableWarning={true}
        />
      </S.LetterTextEditorInputWrapper>

      <button
        style={{ fontSize: "20px", padding: "20px" }}
        title={"red"}
        onClick={fontColor}
      >
        빨강
      </button>

      <button
        style={{ fontSize: "20px", padding: "20px" }}
        title={"blue"}
        onClick={fontColor}
      >
        파랑
      </button>
    </S.LetterTextEditorWrapper>
  );
}

export default LetterTextEditor;
