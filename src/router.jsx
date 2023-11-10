import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import Main from "./pages/main/Main";

import LetterCreate from "./pages/letter/LetterCreate";
import LetterEditor from "./pages/letter/LetterEditor";
import TitleEditor from "./pages/title/TitleEditor";
import TitleCreate from "./pages/title/TitleCreate";
import Visitors from "./pages/visitors/Visitors";
import UserBlackBoard from "./pages/userBlackBoard/UserBlackBoard";
import SendEmail from "./pages/title/SendEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: "/titleCreate", element: <TitleCreate /> },
      { path: "/titleEditor", element: <TitleEditor /> },
      { path: "/letterCreate/:url", element: <LetterCreate /> },
      { path: "/letterEditor/:url", element: <LetterEditor /> },
      { path: "/userBlackBoard/:url", element: <UserBlackBoard /> },
      { path: "/visitors/:url", element: <Visitors /> },
      {
        path: "/sendEmail",
        element: <SendEmail />
      }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
