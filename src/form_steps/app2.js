// import "./App.scss";
import React from "react";
import { Quiz } from "./quiz.js";
import { Background } from "../background/background.js";

export class App2 extends React.Component {
  render() {
    return (
      <div>
        <Quiz />
        <Background />
      </div>
    );
  }
}
