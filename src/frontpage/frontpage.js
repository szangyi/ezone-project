import React from "react";
import { Modal1 } from "./modals.js";
import { Modal2 } from "./modals.js";

export class FrontPage extends React.Component {
  openModal1() {
    document.querySelector(".modal-step1").classList.remove("background-fadeout");
    document.querySelector(".modal-step1").children[0].classList.remove("fadeout");
    document.querySelector(".modal-step1").children[1].classList.remove("fadeout");
    document.querySelector(".modal-step1").children[2].classList.remove("fadeout");
    document.querySelector(".modal-step1").classList.remove("slidedown");
    document.querySelector(".modal-step1").children[2].classList.remove("slidedown");
    document.querySelector(".modal-step1").style.background = "#16152b";
    document.querySelectorAll("span").forEach((element) => {
      element.classList.remove("expanded");
    });

    console.log("showmodal1");
    document.querySelector(".frontpageBody").classList.add("overlay");
    document.querySelector(".btn-frontpage").classList.add("fadeout");
    document.querySelector(".modal-step1").removeAttribute("hidden");
    document.querySelector(".modal-step1").classList.add("slideup");
  }

  render() {
    return (
      <div>
        {" "}
        <Modal1 />
        <button className="btn-green btn-frontpage" onClick={() => this.openModal1()}>
          IMPROVE YOUR PERFORMANCE
        </button>
        <Modal2 />
      </div>
    );
  }
}

document.querySelector("body").classList.add("frontpageBody");
