import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  z-index: 1;

  max-width: 420px;
  min-width: 300px;
  width: 100vw;

  min-height: 100vh;
  background-color: ${porps => porps.theme.colors.main1};
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
