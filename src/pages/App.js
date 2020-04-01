import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "../components/Nav/Nav";

const AsyncHome = lazy(() =>
  import("./HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    "./MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-detail-page" */
  )
);
const AsyncMoviesPage = lazy(() =>
  import("./MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const AsyncNotFoundPage = lazy(() =>
  import("./NotFound/NotFound" /* webpackChunkName: "notfound-page" */)
);

const App = () => {
  return (
    <div>
      <Nav />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncMoviesPage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
