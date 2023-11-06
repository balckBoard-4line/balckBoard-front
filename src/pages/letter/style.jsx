import styled from "styled-components";

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