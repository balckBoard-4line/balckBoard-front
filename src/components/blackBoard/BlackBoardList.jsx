import React from "react";
import * as S from "./style";
import useInnerWidth from "../../hooks/usInnerWidth/useInnerWidth";
import BlackBoard from "./BlackBoard";

import moment from "moment";

function BlackBoardList({ data }) {
  const emSize = (useInnerWidth() / 375) * 10;

  return (
    <S.BlackBoardListWrapper $emSize={emSize + "px"}>
      <BlackBoard data={data} type={"title"} />
      {data?.letters?.map(letter => (
        <BlackBoard key={letter.blackboardId} data={letter} type={"letter"} />
      ))}
    </S.BlackBoardListWrapper>
  );
}

export default BlackBoardList;
