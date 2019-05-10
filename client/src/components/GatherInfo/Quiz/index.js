import React, { Component } from "react";
import Questions from "../Questions"
import Login from '../Login'
import options from "./options.json"
import ContinuePage from "../ContinuePage"
import {Container} from "../ContainerBox"
import NavTabs from "../../NavTabs"
import video from "./images/Health.MP4"
import "./Quiz.css"


class Quiz extends Component {

  state = {
    results: [],
    message: "",
    options,
    intial: true,
    goToQuiz: true,
    displayQuestions: false,
    video:false
    
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    // }  else {
      this.setState({ intial: false })

    // }

    this.setState({
      firstName: "",
      lastName: "",
      options,
      phoneNumber: "",
      displayQuestions: false
    });
  };


  setInitial = event => {
      this.setState({ intial: false })
  };

  handleStartQuiz = event => {
    this.setState({goToQuiz : false})
    this.setState({displayQuestions : true})
    this.setState({video : true})
  }

  renderPage = () => {




    if (this.state.intial){
      return  (
    <Container>
      <Login 
      // firstName ={this.state.firstName}
      // randomName ={this.state.randomName}
      // lastNmae ={this.state.lastName}
      // phoneNumber={this.state.phoneNumber
      setInitial = {this.setInitial}
      handleFormSubmit = {this.handleFormSubmit}
      handleInputChange= {this.state.handleInputChange}
      class="styleQuiz"
  />
  </Container>
  )
     }

     if (this.state.goToQuiz){

      return (
        <div className="styleQuiz">
         <Container>
        <ContinuePage 
              goToQuiz = {this.state.goToQuiz}
              handleStartQuiz ={this.handleStartQuiz}
     
        />
           </Container>
      </div>
      ); 
      }


    if (this.state.displayQuestions === true){
   
      return(   
      
      <div>
        <Container>
        <div className="alignVideo">
        <video autoPlay muted playsinline className="alignVideo">
        <source src={video} type="video/mp4" />
      </video>
    </div>
    <h1>Please Check All that Apply</h1>
   
    
      
      <Questions />
      </Container>
      </div>

      )


    
    // return this.state.options.map(option => {
      
    //   return (
    //     <div>
    //     <Questions
    //       id={option.id}
    //       key={option.id}
    //       name={option.name}
    //       score={option.score}
    //     />
    //   </div>
    
    //   ); 
    //   }) 
    }

    else {
      return "Hello"
    }
  }


  // renderVideo = () => {

  //   if (this.state.video){
  //     return  (
  //       <div>
  //       <div className="alignVideo">
  //       <video autoPlay muted playsinline className="alignVideo">
  //       <source src={video} type="video/mp4" />
  //     </video>
  //   </div>
  //   <h1>Please Check All that Apply</h1>
  //   <button onClick={() => props.nextQuestions(props.id)} className="remove">
  //     𝘅
  //   </button>
  //   </div>
  //     )
  //   }
  // }


  render(){
    return (
      <div>
          <NavTabs />
          <div className="card container mx-auto">
            <div className="container card-body">
              <div class="video-container">
                {/* {this.renderVideo()} */}
                  {this.renderPage()}
              </div>
           </div>
       </div>
       </div>
        );
}

}
export default Quiz;
