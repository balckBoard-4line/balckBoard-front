import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import Main from "./pages/main/Main";
import BlackBoardView from "./pages/blackBoardView/BlackBoardView";
import LetterCreate from "./pages/letter/LetterCreate";
import LetterEditor from "./pages/letter/LetterEditor";
import TitleEditor from "./pages/title/TitleEditor";
import TitleCreate from "./pages/title/TitleCreate";
import BeforeLaunch from "./pages/bfLaunch/BeforeLaunch";
import Visitors from "./pages/visitors/Visitors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: "/titleCreate/:url", element: <TitleCreate /> },
      { path: "/titleEditor/:url", element: <TitleEditor /> },
      { path: "/letterCreate/:url", element: <LetterCreate /> },
      { path: "/letterEditor/:url", element: <LetterEditor /> },
      { path: "/blackBoard/:url", element: <BlackBoardView /> },
      { path: "/bflaunch/:url", element: <BeforeLaunch /> },
      { path: "/visitors/:url", element: <Visitors /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
