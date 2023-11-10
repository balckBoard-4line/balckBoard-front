import React, { useState, useEffect } from "react";
import moment from "moment";

import * as S from "./style";
import BeforeLaunch from "../../components/userBlackBoard/BeforeLaunch";
import AfterLaunch from "../../components/userBlackBoard/AfterLaunch";
import { useParams } from "react-router-dom";
import { API } from "../../api/axios";

function UserBlackBoard() {
  const [data, setData] = useState({});

  const params = useParams();

  const fetchLanternsData = async () => {
    try {
      const response = await API.get(`api/blackboard/?id=${params.url}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러~", error);
    }
  };
  useEffect(() => {
    fetchLanternsData();
  }, []);

  //졸업날짜가 지났는지 확인하는 함수
  const [isLaunch, setIsLaunch] = useState(false);

  useEffect(() => {
    const deadline = moment(data.graduateDate);
    console.log(deadline);
    const currentTime = moment();
    console.log("데드라인지남?", deadline < currentTime, deadline, currentTime);
    setIsLaunch(deadline < currentTime);
  }, [data]);
  const getIsLaunch = bool => {
    setIsLaunch(bool);
  };

  return (
    <S.PageWrapper style={{ position: isLaunch ? "" : "fixed" }}>
      {moment(data.graduateDate) < moment() ? (
        <AfterLaunch data={data} />
      ) : (
        <BeforeLaunch getIsLaunch={getIsLaunch} data={data} />
      )}
      아왜안됨? {isLaunch}
    </S.PageWrapper>
  );
}

export default UserBlackBoard;
