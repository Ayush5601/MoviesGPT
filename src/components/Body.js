import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Details from "../pages/Details";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/details/:movieId",
      element: <Details />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
