import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <SearchForm />
          <Wrapper>
            
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
