import React from "react";

import BlackBoardList from "../blackBoard/BlackBoardList";

function AfterLaunch({ data }) {
  return (
    <>
      <S.ListWrapper>
        <BlackBoardList data={data} />
      </S.ListWrapper>
    </>
  );
}

export default AfterLaunch;
