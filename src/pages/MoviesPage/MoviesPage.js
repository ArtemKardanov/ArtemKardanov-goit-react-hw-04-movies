import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import MovieList from "../../components/MovieList/MovieList";
import ErrorNotification from "../../components/ErrorNonification/Error";

export default class MoviesPage extends Component {
  state = { query: "", items: [], error: null };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };

  movieListQuery = () => {
    moviesApi
      .fetchMoviesByQuery()
      .then(({ results }) => {
        if (results.length === 0) {
          alert("Try another request");
        }
        this.setState({ items: results });
      })
      .catch(error => this.setState({ error }));
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.clearQuery();

    moviesApi.searchQuery = this.state.query;

    this.movieListQuery();
  };

  render() {
    const { query, items, error } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={query} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>

        {error && <ErrorNotification text={error.message} />}

        {items.length > 0 && (
          <ul>
            <MovieList items={items} />
          </ul>
        )}
      </>
    );
  }
}
