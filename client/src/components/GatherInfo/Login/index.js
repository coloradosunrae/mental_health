import React, { Component } from "react";
import "./Login.css"
import API from "../../../utils/API";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import Select from "react-select";
// import { Col, Row, Container } from "../Grid";
// import { Input, TextArea, FormBtn } from "../Form";
import Welcome from "./images/welcome.gif"
import WelcomeLogin from "./images/welcomelogin.gif"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  UncontrolledAlert
} from "reactstrap";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];


class Login extends Component {
  state = {
    clients: [],
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    messageInput: "",
    suicideInput: true
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveClient({
        firstName: this.state.firstName,
         lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        messageInput: this.state.messageInput
      })
        .then(this.props.setInitial)
        .catch(err => console.log(err));
    }
  };


  
  handleSuicide = () => {
    if(this.state.suicideInput) {
      return (
        <CardBody>
        <UncontrolledAlert color="danger">
          {/* <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div> */}
          <div className="alert-message">
            <strong>Please reach out to 1-800-273-8255</strong> for feelings of suicide. This email is not monitored 24/7  
          </div>
        </UncontrolledAlert>
        </CardBody>
      )
    } else{
      return (
        <CardBody>
        <UncontrolledAlert color="danger">
          {/* <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div> */}
          <div className="alert-message">
            <strong>Please reach out to 1-800-273-8255</strong> for feelings of suicide. This email is not monitored 24/7  
          </div>
        </UncontrolledAlert>
        </CardBody>
      )
    }
  }
 




  render() {
    

    return (
        <div className="boxInfo mx-auto formColor">
 
        
   <div>

     <img src= {WelcomeLogin} />
 

     <div className="text-center mt-4">
      <h2>Let's make a change together</h2>
      <p className="lead">Have someone reach out to you</p>
    </div>

       <div className="row">
          <div className="col-sm">
          <form className="form-group">
            <div className="form-row">
      
            <div className="col">
                  <input
                       value={this.state.firstName}
                       name="firstName"
                       type="text"
                       placeholder="First Name"
                       className="form-control mac"
                       onChange={this.handleInputChange}
                  />
              </div>
              <div className="col">
                  <input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                  className="form-control mac"
                  />
               </div>
               </div>
               <FormGroup>
            <InputMask mask="(999) 999-9999"
             value={this.state.phoneNumber}
             name="phoneNumber"
             onChange={this.handleInputChange}
             placeholder="Phone Number"
             className="form-control formChange mac"
            >
              {inputProps => <Input {...inputProps} type="text" />}
            </InputMask>
     
            <FormGroup check inline>
           
        <Label check>
          <Input type="radio" name="radio2" onClick={this.handleSuicide} onChange={() => true} /> Feelings of Suicdality
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="radio2" /> Looking for Resourccs
        </Label>
      </FormGroup>
      <FormGroup check inline disabled>
        <Label check>
          <Input type="radio" name="radio2"  /> Administration
        </Label>
      </FormGroup>
        

                   <textarea
                     value={this.state.messageInput}
                     name="messageInput"
                     onChange={this.handleInputChange}
                     type="text"
                     placeholder="Message"
                     rows="6"
                     className="form-control mac"
                  />
                        </FormGroup>
                  
                   <button className="btn btn-inside btn-boarder" onClick={this.handleFormSubmit}>Send</button>
                </form>

          </div>
      </div>
  </div>


        </div>
        );

    }
}

export default Login;
