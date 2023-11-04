import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound/NotFound";
import Main from "./pages/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Main /> }],
    errorElement: <NotFound />
  }
]);

export default router;
