import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import Login from "../pages/Login";
import MyPage from "../pages/MyPage";

import MovieLists from "../pages/MovieList";
import MovieType from "../pages/MovieType";
import MovieDetail from "../pages/MovieDetail";
import MovieReviews from "../components/DetailReview";

import MovieGenres from "../pages/MovieGenre";

import NotFound from "../pages/NotFound";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MovieLists />,
      },
      {
        path: "movie",
        element: <Navigate to="/" replace />,
      },
      {
        path: "movie/:listType",
        element: <MovieType />,
      },
      {
        path: "movie/detail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "movie/genre/:genreId",
        element: <MovieGenres />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "mypage",
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
