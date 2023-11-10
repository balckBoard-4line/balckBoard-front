import { styled } from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const PageContent = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`;

export const VisitorBrown = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  height: 20px;
  background-color: #715948;
`;

export const VisitorsWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px 15px;
`;

export const VisitorsBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: solid 2px white;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;

export const VisitorsTitle = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: center;
  padding: 20px 0;
`;

export const VisitorsContent = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow: scroll;
`;

export const VisitorsContentIn = styled.div`
  width: 100%;
  span {
    line-height: 2;
  }
`;
