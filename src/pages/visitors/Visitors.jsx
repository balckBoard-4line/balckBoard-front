import React, { Children, useEffect, useState } from "react";
import * as S from "./style";
import { Link, useParams } from "react-router-dom";

import { API } from "../../api/axios";
import Button from "../../components/common/button/Button";

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
    <S.PageWrapper style={{ backgroundColor: "#486455" }}>
      <S.PageContent>
        <S.VisitorsWrapper>
          <S.VisitorsBox>
            <S.VisitorsTitle>다녀간 사람</S.VisitorsTitle>
            <S.VisitorsContent>
              <S.VisitorsContentIn>
                {nicknameList?.map((nickname, index) => (
                  <span key={index}>
                    {nicknameList.length - 1 == index
                      ? nickname
                      : nickname + ", "}
                  </span>
                ))}
              </S.VisitorsContentIn>
            </S.VisitorsContent>
          </S.VisitorsBox>
        </S.VisitorsWrapper>
      </S.PageContent>

      <Link to={`/userBlackboard/${params.url}`}>
        <Button content={"돌아가기"} type={"white"} />
      </Link>

      <S.VisitorBrown />
    </S.PageWrapper>
  );
}

export default Visitors;
