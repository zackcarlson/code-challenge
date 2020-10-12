import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "../../routes";
import ApolloContext from "../../state/apollo";

const App = () => (
  <div className="app-root">
    <ApolloContext>
      <Router>
        <Routes />
      </Router>
    </ApolloContext>
  </div>
);

export default App;
