// import "./App.scss";
import React from "react";
import { FrontPage } from "./frontpage.js";

export class App1 extends React.Component {
  openModal1() {
    console.log("showmodal1");
    document.querySelector(".frontpageBody").classList.add("overlay");
    document.querySelector(".btn-frontpage").classList.add("fadeout");
    document.querySelector(".modal-step1").removeAttribute("hidden");
    document.querySelector(".modal-step1").classList.add("slideup");
  }

  render() {
    return (
      <div>
        <FrontPage />
      </div>
    );
  }
}
