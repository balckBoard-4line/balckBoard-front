import React, { Children, useEffect, useState } from "react";
import * as S from "./style";
import { Link, useParams } from "react-router-dom";

import { API } from "../../api/axios";
import Button from "../../components/common/button/Button";

function Visitors() {
  const [nicknameList, setNicknameList] = useState([
    "안녕",
    "안녕안녕안녕...",
    "안녕~~~~",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕...",
    "안녕안녕안녕..."
  ]);

  // const params = useParams();

  // const fetchLanternsData = async () => {
  //   try {
  //     const response = await API.get(`api/visitor?id=${params.url}`);
  //     setNicknameList(response.data.nickname);
  //   } catch (error) {
  //     console.log("에러~", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchLanternsData();
  // }, []);

  return (
    <div>
      <S.MainWrapper>
        <S.Visitorsbox>
          <S.VisitorWrapper>
            <S.VisitorTitle>다녀간 사람</S.VisitorTitle>
            <S.Visitorcontent>
              <S.Visitorcontentin>
                {nicknameList?.map((nickname, index) => (
                  <span key={index}>
                    {nicknameList.length - 1 == index
                      ? nickname
                      : nickname + ","}
                    &nbsp;
                  </span>
                ))}
              </S.Visitorcontentin>
            </S.Visitorcontent>
          </S.VisitorWrapper>
        </S.Visitorsbox>

        <div style={{ flexShrink: "1" }}>
          <Button content={"돌아가기"} type={"white"} />
          <S.VisitorBrown />
        </div>
      </S.MainWrapper>
    </div>
  );
}

export default Visitors;
