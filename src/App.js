import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
