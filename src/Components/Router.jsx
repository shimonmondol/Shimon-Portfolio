import { createBrowserRouter } from "react-router";

import ProjectDetails from "./ProjectDetails";
import Projects from "./Projects";


const router = createBrowserRouter([
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails></ProjectDetails>
  },
]);

export default router;
