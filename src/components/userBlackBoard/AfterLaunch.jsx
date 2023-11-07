import React from "react";

import BlackBoardList from "../blackBoard/blackBoardList";

function AfterLaunch({ data }) {
  return (
    <>
      <BlackBoardList data={data} />
    </>
  );
}

export default AfterLaunch;
