import { styled } from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainBoardnum = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 15px;
  height: 20vh;
  font-weight: 600;
`;

export const MainBoardnum2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55vh;
`;
export const MainBoardnum2logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  width: 60%;
  height: 65%;
`;

export const MainBoardnum3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 25vh;
  gap: 2vh;
`;
export const MainBoardnum3crtbrdwrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80%;
  border-radius: 10px;
  height: 30%;
  color: #345342;
  font-size: 20px;
`;
export const MainBoardnum3createboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  color: #345342;
  font-size: 20px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: white;
    color: #345342;
    transform: scale(1.05);
  }
`;
export const MainBoardnum3tu = styled.div`
  font-size: 11px;
`;

// export const MainNavWrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;
// export const MainNavBtn = styled.div`
//   padding: 5px 10px;
//   font-size: 16px;
// `;
