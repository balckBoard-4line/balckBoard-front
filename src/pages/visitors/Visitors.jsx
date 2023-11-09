import React, { Children, useEffect, useState } from "react";
import * as S from "./style";
import { Link, useParams } from "react-router-dom";

import { API } from "../../api/axios";

function Visitors() {
  const [nicknameList, setNicknameList] = useState([]);

  const params = useParams();

  const fetchLanternsData = async () => {
    try {
      const response = await API.get(`api/visitor?id=${params.url}`);
      setNicknameList(response.data.nickname);
    } catch (error) {
      console.log("에러~", error);
    }
  };
  useEffect(() => {
    fetchLanternsData();
  }, []);

  return (
    <div>
      <S.MainWrapper>
        <S.Visitors1>
          <S.Visitorsbox>
            <S.VisitorTitle>다녀간 사람</S.VisitorTitle>
            <S.Visitorcontent>
              <S.Visitorcontentin>
                {nicknameList?.map((nickname, index) => (
                  <span key={index}>{nickname}</span>
                ))}
              </S.Visitorcontentin>
            </S.Visitorcontent>
          </S.Visitorsbox>
        </S.Visitors1>
        <S.Visitors2>
          <Link to="/userBlackBoard/1" style={{ width: "80%" }}>
            <S.VisitorsReturn>돌아가기</S.VisitorsReturn>
          </Link>
        </S.Visitors2>
        <S.Visitors3>
          <S.VisitorBrown />
        </S.Visitors3>
      </S.MainWrapper>
    </div>
  );
}

export default Visitors;
