import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import MainLayout from "../layout/MainLayout";
import MovieLists from "../pages/MovieLists";
import MovieType from "../pages/MovieType";
import MovieDetail from "../pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "/movie",
        element: <MovieLists />,
      },
      {
        path: "/movie/:listType",
        element: <MovieType />,
      },
      {
        path: "/movie/detail/:movieId",
        element: <MovieDetail />,
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
