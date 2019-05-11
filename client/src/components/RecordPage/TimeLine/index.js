import React, {Component} from "react";
import first from "./images/first.png"
import form from "./images/form.png"
import inperson from "./images/inperson.png"
import phone from "./images/phone.png"
import TimeLineCard from "../TimeLineCard"
import "./styleTime.scss";
import Modal from "../Modal/app.js"
import API from "../../../utils/API";

class TimeLine extends Component {

  
    renderImage = type => {
        if (type === "Evaluation") {
            return <img src={inperson} className="imageTimeLine" alt="..."/>
        }
        if (type === "Online Form") {
            return <img src={form} className="imageTimeLine" alt="..."/>
        }
        if (type === "First Contact") {
            return <img src={first} className="imageTimeLine" alt="..."/>
        }
        if (type === "Telephone Call") {
            return <img src={phone} className="imageTimeLine" alt="..."/>
        } else {
            return <img src={form} className="imageTimeLine" alt="..."/>
        };

    }



    render()


    {
        return (
  

            <div className="indContainer">


                <h1 className="top">Medical Journal {"    "}</h1>
    
            </div>

        );
    }

}

export default TimeLine;
