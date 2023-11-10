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

export const LeftDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  padding-top: 30px;
`;

export const LeftDateTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftDateAbout = styled.div`
  font-size: 14px;
`;

export const LeftDateContent = styled.div`
  font-size: 20px;
`;
export const CopyBtn = styled.img`
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.grey1};
  border-radius: 50%;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WantToMakeBtn = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 30px;
  div {
    margin-right: 5px;
  }
  color: ${props => props.theme.colors.font1};
`;

export const Wood = styled.div`
  width: 100%;
  height: 20px;
  background-color: #715948;
`;

export const BlackBoardWrapper = styled.div`
  width: 100%;
  font-size: ${props => props.$emSize};
`;
