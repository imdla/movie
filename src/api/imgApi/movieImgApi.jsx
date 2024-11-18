import api from "./imgAxios";

const movieApi = {
  // 이미지 GET
  getMovies: async (imgParams) => {
    const response = await api.get(`/${imgParams}`);
    return response;
  },
  // // 2. 개별 GET
  // getMovieById: async (movieId) => {
  //   const response = await api.get(`/${movieId}`);
  //   return response.data.results;
  // },
};

export default movieApi;
