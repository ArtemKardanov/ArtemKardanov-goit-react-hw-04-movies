import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Reviews from "../../components/Reviews/Reviews";

const getIdFromProps = props => props.match.params.movieId;

export default class ReviewsPage extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const movieId = getIdFromProps(this.props);

    moviesApi
      .fetchMovieReviewsWithId(movieId)
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ul>
          <Reviews items={reviews} />
        </ul>
      </div>
    );
  }
}
