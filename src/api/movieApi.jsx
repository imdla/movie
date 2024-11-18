import api from "./axios";

console.log(api.get(`/now_playing`));

const movieApi = {
  // 1. 리스트 GET
  getMovies: async (movieType) => {
    const response = await api.get(`/${movieType}`);
    return response.results;
  },
  // 2. 개별 GET
  getMovieById: async (movieId) => {
    const response = await api.get(`/${movieId}`);
    return response.results;
  },
  // 3. POST
  // createPost: async (formData) => {
  //   const response = await api.post("", formData);
  //   return response.data;
  // },
};

export default movieApi;
