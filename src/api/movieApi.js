import api from "./axios";

const movieApi = {
  // 1. 리스트 GET
  getMovies: async (movieType) => {
    const response = await api.get(`/movie/${movieType}`);
    return response.data.results;
  },
  // 2. 개별 GET
  getMovieById: async (movieId) => {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  },
  // 3. 개별 리뷰 GET
  getMovieByIdReview: async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  },
  // 4. 장르 GET
  getMovieGenres: async (genreId) => {
    const response = await api.get(`/discover/movie?with_genres=${genreId}?&`);
    return response.data.results;
  },
};

export default movieApi;