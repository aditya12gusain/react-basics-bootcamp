import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactUs" component={ContactUs} />
    </>
  );
}

export default App;
