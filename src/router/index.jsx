import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import MainLayout from "../layout/MainLayout";
import MovieLists from "../pages/MovieLists";
import MovieType from "../pages/MovieType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <MovieLists />,
            children: [{ path: "/movie", element: <MovieType /> }],
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
