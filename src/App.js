import { connect } from "react-redux";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App(props) {
  const { isAuthenticated } = useAuth0();
  console.log(`isAuthenticated`, isAuthenticated)
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MovieList type="popular" />
        </Route>
        <Route path="/topRated">
          <MovieList type="topRated" />
        </Route>
        <Route path="/upcoming">
          <MovieList type="upcoming" />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(App);
