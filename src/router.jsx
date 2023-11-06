import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import Main from "./pages/main/Main";
import BlackBoardView from "./pages/blackBoardView/BlackBoardView";
import LetterCreate from "./pages/letter/LetterCreate";
import LetterEditor from "./pages/letter/LetterEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: "/letterCreate/:url", element: <LetterCreate /> },
      { path: "/letterEditor/:url", element: <LetterEditor /> },
      { path: "/blackBoard/:url", element: <BlackBoardView /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
