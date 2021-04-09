import "./App.css";
import HeroInfoScreen from "./pages/HeroInfo";
import HeroListScreen from "./pages/HeroList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
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
