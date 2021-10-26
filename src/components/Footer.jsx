import React, { useState } from "react";
import footer from "./footer.module.css";

function Footer() {
  // const counter = 0;

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me to + 1</button>
      <h1 className={footer.text}>Footer {counter}</h1>
    </div>
  );
}

export default Footer;
