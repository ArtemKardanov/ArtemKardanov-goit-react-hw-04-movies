import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./NotFound/NotFound";
import Nav from "../components/Nav/Nav";

export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          {/* <Route path="/movies" component={MoviesPage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
