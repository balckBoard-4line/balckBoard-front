import React from "react";

import BlackBoardList from "../blackBoard/BlackBoardList";

function AfterLaunch({ data }) {
  return (
    <>
      <BlackBoardList data={data} />
    </>
  );
}

export default AfterLaunch;
