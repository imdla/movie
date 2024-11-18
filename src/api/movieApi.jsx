import api from "./axios";

const movieApi = {
  // 1. 리스트 GET
  getMovies: async (movieType) => {
    const response = await api.get(`/${movieType}`);
    return response.data.results;
  },
  // 2. 개별 GET
  getMovieById: async (movieId) => {
    const response = await api.get(`/${movieId}`);
    return response.data;
  },
  // 3. 개별 리뷰 GET
  getMovieByIdReview: async (movieId) => {
    const response = await api.get(`/${movieId}/reviews`);
    return response.data.results;
  },
};

export default movieApi;
