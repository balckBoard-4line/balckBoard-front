import { styled } from "styled-components";
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
export const Visitors1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 83vh;
`;
export const VisitorTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 15%;
`;
export const Visitorcontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
  max-width: 420px; /* 추가: 최대 너비 설정 */
`;
export const Visitorcontentin = styled.div`
  display: flex;
  align-items: start;
  font-size: 15px;
  width: 80%;
  height: 100%;
  word-wrap: break-word;
  line-height: 2; /* 줄 간격 설정 (예: 1.5는 현재 글자 크기의 1.5배 간격) */
`;

export const Visitorsbox = styled.div`
  width: 85%;
  height: 95%;
  border: 3px solid white;
  border-radius: 20px;
`;
export const Visitors2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
`;
export const VisitorsReturn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  border: 3px solid white;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  color: #345342;
`;
export const Visitors3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3vh;
`;
export const VisitorBrown = styled.div`
  width: 100%;
  height: 100%;
  background-color: #715948;
`;
