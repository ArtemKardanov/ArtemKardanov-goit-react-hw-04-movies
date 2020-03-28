import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Cast from "../../components/Cast/Cast";

const getIdFromProps = props => props.match.params.movieId;

export default class CastPage extends Component {
  state = { cast: [] };

  componentDidMount() {
    const movieId = getIdFromProps(this.props);

    moviesApi
      .fetchMovieCastWithId(movieId)
      .then(item => this.setState({ cast: item.cast }));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul>
          <Cast items={cast} />
        </ul>
      </div>
    );
  }
}
