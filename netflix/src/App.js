import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
