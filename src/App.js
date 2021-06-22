import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { fetchData } from "../src/redux/actions/list.actions";
import HeroInfoScreen from "./pages/HeroInfo";
import HeroListScreen from "./pages/HeroList";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeroListScreen />
        </Route>
        <Route exact path="/heroes/:id">
          <HeroInfoScreen />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
