import React, {Component} from "react";
import first from "./images/first.png"
import form from "./images/form.png"
import inperson from "./images/inperson.png"
import phone from "./images/phone.png"
import notes from "./notes.json"
import TimeLineCard from "../TimeLineCard"
import "./styleTime.scss";

class TimeLine extends Component {

    state = {
        notes,
    }

     renderImage = type => {
      console.log(notes.type)
      if (type === "Evaluation") {
          return  <img src= {inperson} className="imageTimeLine" alt="..."/>
        }
        if (type  === "Online Form") {
          return   <img src= {form} className="imageTimeLine" alt="..."/>
        }
        if (type  === "First Contact") {
          return  <img src= {first} className="imageTimeLine" alt="..."/>
        }
        if (type  === "Telephone Call") {
          return  <img src= {phone} className="imageTimeLine" alt="..."/>
        }
        else {
          return <img src= {form} className="imageTimeLine" alt="..."/>
        };
      
      }
  

    render() 
    {
        return (
         <div className="indContainer">
         <h1 className="top">Medical Journal</h1>
          {this.state.notes.map(note => (

           <TimeLineCard
             id={note.id}
             key={note.id}
             note={note.note}
             renderImage={this.renderImage}
             type={note.type}
             writtenBy={note.writtenBy}
             date={note.date}
           />
         ))}
         </div>
           

         );
    }

}

export default TimeLine;
