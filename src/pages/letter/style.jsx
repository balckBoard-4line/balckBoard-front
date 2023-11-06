import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageContent = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`;
