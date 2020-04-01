import axios from "axios";

const API_KEY = "d469cf2837b3fc3a4c7c0e8402f427a7";

export default {
  query: "",
  page: 1,

  fetchMovies() {
    return axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      )
      .then(response => response.data);
  },

  fetchMovieWithId(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
      .then(response => response.data);
  },

  fetchMovieCastWithId(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      )
      .then(response => response.data);
  },

  fetchMovieReviewsWithId(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(response => response.data);
  },

  fetchMoviesByQuery() {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.query}&page=1&include_adult=false`
      )
      .then(response => response.data);
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  }
};
