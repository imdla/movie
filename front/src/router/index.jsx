import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";

import MovieList from "../pages/MovieList";
import MovieType from "../pages/MovieType";
import MovieDetail from "../pages/MovieDetail";
import MovieGenre from "../pages/MovieGenre";
import MovieSearch from "../pages/MovieSearch";

import NotFound from "../pages/NotFound";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MovieList />,
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
        element: <MovieGenre />,
      },
      {
        path: "movie/search/:inputValue",
        element: <MovieSearch />,
      },
      {
        path: "signup",
        element: <Signup />,
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
