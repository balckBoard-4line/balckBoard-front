import { styled } from "styled-components";
export const MainWrapper = styled.div`
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

export const VisitorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 15px;
`;

export const VisitorTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  padding: 20px;
`;
export const Visitorcontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;

  overflow: scroll;
`;
export const Visitorcontentin = styled.div`
  display: flex;
  justify-content: start;

  font-size: 15px;
  padding: 0 30px;

  flex-wrap: wrap;
  line-height: 2;
  span {
    flex-shrink: 0;
  }
`;

export const Visitorsbox = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 20px;
`;

export const VisitorBrown = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 20px;
  background-color: #715948;
`;
