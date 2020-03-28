import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import { Link } from "react-router-dom";

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
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
