const key = process.env.REACT_APP_MOVIE_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestSearch: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=`
};

export default requests;
