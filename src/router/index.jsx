import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import MainLayout from "../layout/MainLayout";

import Login from "../pages/Login";
import MyPage from "../pages/MyPage";

import MovieLists from "../pages/MovieLists";
import MovieType from "../pages/MovieType";
import MovieDetail from "../pages/MovieDetail";
import MovieReviews from "../pages/MovieReviews";

import MovieGenres from "../pages/MovieGenres";

import NotFound from "../pages/NotFound";
import Loading from "../pages/Loading";

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
        path: "/movie/review/:movieId",
        element: <MovieReviews />,
      },
      {
        path: "/movie/genre",
        element: <MovieGenres />,
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
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
]);

export default router;
