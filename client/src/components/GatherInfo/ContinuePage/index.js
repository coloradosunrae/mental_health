import React from "react";
import lion from "./images/lionstop.gif"
import "./ContinuePage.css"

function ContinuePage(props) {
  return (

    <div className="container containeContinuePage">
    <img className="lionImage"src={lion} alt="loading..." />
     <button className="continueButton" onClick={props.handleStartQuiz}>Start</button>
    </div>
  );
}

export default ContinuePage;