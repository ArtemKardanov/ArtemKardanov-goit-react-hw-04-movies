import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";

import MovieDetails from "../../components/MovieDetails/MovieDetails";
import moviesApi from "../../services/moviesApi";

const AsyncCastPage = lazy(() =>
  import("../CastPage/CastPage" /* webpackChunkName: "cast-page" */)
);
const AsyncReviewsPage = lazy(() =>
  import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "reviews-page" */)
);

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const movieId = getIdFromProps(this.props);

    moviesApi.fetchMovieWithId(movieId).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push("/");
  };

  render() {
    const { movie } = this.state;
    const movieId = getIdFromProps(this.props);
    const { path } = this.props.match;
    const { location } = this.props;
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
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: { from: location }
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: { from: location }
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${path}/cast`} component={AsyncCastPage} />
          <Route path={`${path}/reviews`} component={AsyncReviewsPage} />
        </Suspense>
      </div>
    );
  }
}
