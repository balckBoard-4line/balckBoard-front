import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Visitors() {
  return (
    <div>
      <S.MainWrapper>
        <S.Visitors1>
          <S.Visitorsbox>
            <S.VisitorTitle>다녀간 사람</S.VisitorTitle>
            <S.Visitorcontent>
              <S.Visitorcontentin>
                서현, 이름을 길 게지 은사람, 가현, 동환,호은,민서,4호선톤파이팅~
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
