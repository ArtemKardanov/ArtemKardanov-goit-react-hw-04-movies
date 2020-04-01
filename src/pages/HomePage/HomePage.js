import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import MovieList from "../../components/MovieList/MovieList";

export default class HomePage extends Component {
  state = { items: [] };

  componentDidMount() {
    moviesApi
      .fetchMovies()
      .then(items => this.setState({ items: items.results }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          <MovieList items={items} />
        </ul>
      </div>
    );
  }
}
