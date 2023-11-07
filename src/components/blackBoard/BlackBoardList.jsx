import React from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import BlackBoard from "./BlackBoard";

function BlackBoardList({ data }) {
  const emSize = (useInnerWidth() / 375) * 10;

  return (
    <S.BlackBoardListWrapper $emsize={emSize + "px"}>
      <BlackBoard data={data} type={"title"} />
      {data.letters.map(letter => (
        <BlackBoard key={letter.blackboardId} data={letter} type={"letter"} />
      ))}
    </S.BlackBoardListWrapper>
  );
}

export default BlackBoardList;
