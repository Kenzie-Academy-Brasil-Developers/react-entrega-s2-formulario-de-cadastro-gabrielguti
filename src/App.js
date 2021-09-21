import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home/:name">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
