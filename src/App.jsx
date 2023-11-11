import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";
import useInnerWidth from "./hooks/usInnerWidth/useInnerWidth.jsx";

import "./style/font.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  z-index: 1;

  max-width: 420px;
  width: 100vw;

  min-height: 100vh;
  background-color: ${porps => porps.theme.colors.main1};

  font-family: "Alien";
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
  const emSize = (useInnerWidth() / 375) * 10;
  return (
    <>
      <ThemeProvider emSize={emSize + "px"} theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
