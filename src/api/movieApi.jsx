import api from "./axios";

const movieApi = {
  // 1. 리스트 GET
  getMovies: async (movieType) => {
    const response = await api.get(`/${movieType}`);
    return response.data;
  },
  // 2. 개별 GET
  getMovieById: async (movieId) => {
    const response = await api.get(`/${movieId}`);
    return response.data;
  },
  // 3. POST
  // createPost: async (formData) => {
  //   const response = await api.post("", formData);
  //   return response.data;
  // },
};

export default movieApi;
