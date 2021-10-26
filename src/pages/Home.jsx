import React, { useState } from "react";
import { Button } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  const [name, setName] = useState("Aditya");

  return (
    <div>
      <NavBar name={name} />
      <Button variant="primary">Primary</Button>
      <h1>Home Page</h1>
      <Footer />
    </div>
  );
}

export default Home;
