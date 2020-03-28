import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import MovieDetails from "../../components/MovieDetails/MovieDetails";
import moviesApi from "../../services/moviesApi";
import CastPage from "../CastPage/CastPage";
import ReviewsPage from "../ReviewsPage/ReviewsPage";

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const movieId = getIdFromProps(this.props);

    moviesApi.fetchMovieWithId(movieId).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { movie } = this.state;
    const movieId = getIdFromProps(this.props);
    const { path } = this.props.match;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {movie && <MovieDetails {...movie} />}

        <div>
          Additional information
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Route path={`${path}/cast`} component={CastPage} />
        <Route path={`${path}/reviews`} component={ReviewsPage} />
      </div>
    );
  }
}
