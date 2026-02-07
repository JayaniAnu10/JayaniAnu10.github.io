import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectOneArch from "../components/Architectures/ProjectOneArch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projectOneArch",
    element: <ProjectOneArch />,
  },
]);

export default router;
