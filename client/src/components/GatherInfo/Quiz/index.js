import React, { Component } from "react";
import Questions from "../Questions"
import Login from '../Login'
import ContinuePage from "../ContinuePage"
import API from "../../../utils/API";
import {Container} from "../ContainerBox"
import NavTabs from "../../NavTabs"
import SecondNavTabs from "../../SecondNavTabs"
import video from "./images/Health.MP4"
import Clogin from '../Clogin'


class Quiz extends Component {

  state = {
    results: [],
    clients: [],
    firstName: "",
    lastName: "",
    message: "",
    phoneNumber: "",
    messageInput: "",
    birthdate: "",
    race : "",
    hSuicidal: "",
    _id: "",
    intial: true,
    goToQuiz: true,
    displayQuestions: false,
    video:false,
    random: 0,
    
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   // if (!this.state.firstName || !this.state.lastName) {
  //     alert("Fill out your first and last name please!");
  //   // }  else {
  //     this.setState({ intial: false })

  //   // }

  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     displayQuestions: false
  //   });
  // };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveClient({
        firstName: this.state.firstName,
         lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        messageInput: this.state.messageInput,
        race: this.state.race,
        hSuicidal: this.state.hSuicidal,
        birthdate: this.state.birthdate,
      })
        .then(this.setInitial)
        .catch(err => console.log(err));
    }
  };


      // API.updatethisClient(this.state._id, {
      //   race : (this.state.race), 
      //   hSuicidal : (this.state.hSuicidal), 
      //   birthdate :(this.state.birthdate)
      // })
      //    .then(res => this.loadClients())
      //   .catch(err => console.log(err));
  // };


  renderPage = () => {

    if (this.state.intial){

      return  (
        <div>

        <Container>
        
        <Login 
        firstName ={this.state.firstName}
        // randomName ={this.state.randomName}
        lastNmae ={this.state.lastName}
        phoneNumber={this.state.phoneNumber}
        messageInput ={this.state.messageInput}
        setInitial = {this.setInitial}
       
        handleInputChange= {this.handleInputChange}
        class="styleQuiz"
    />
    </Container>
    </div>
  )
     }

     if (this.state.goToQuiz){

      return (
        <div>
     
        <Container>
        <Clogin 
            birthdate = {this.state.birthdate}
            race = {this.state.race}
            hSuicidal = {this.state.hSuicidal}
            // secondSubmit = {this.secondSubmit}
             handleFormSubmit = {this.handleFormSubmit}
            handleInputChange= {this.handleInputChange}
        />
        </Container>
  </div>
        
      )
      //   <div className="styleQuiz">
      //    <Container>
      //   <ContinuePage 
      //         goToQuiz = {this.state.goToQuiz}
      //         handleStartQuiz ={this.handleStartQuiz}
     
      //   />
      //      </Container>
      // </div>
      // ); 
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
