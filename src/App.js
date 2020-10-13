import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About } from "./pages";
import { NavBar, Alert } from "./components";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
