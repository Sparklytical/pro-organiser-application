import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Containers/HomePage/Home";
import { AddBoard } from "./Containers/CreateBoard/AddBoard";
import { Header } from "./components/Header/Header";
import { Board } from "./Containers/board/Board";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createboard" component={AddBoard} />
        <Route path="/board/:name" component={Board} />
        <Route exact path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
