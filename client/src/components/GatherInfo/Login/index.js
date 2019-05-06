import React, { Component } from "react";
import plane from "./images/plane.png"
import "./Login.css"

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    message: "",
    // intial: true,
    // goToQuiz: true,
    // displayQuestions: false,
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    

    return (
        <div className="card container mx-auto">
   <div className="container card-body">
      <h1 className="text-center">Hello</h1>
       <div className="row">
          <div className="col-sm">
          <div className="wrap-contact3-form-radio">
						<div className="contact3-form-radio m-r-42">
							<input className="input-radio3" id="radio1" type="radio" name="choice" value="say-hi" checked="checked"/>
							<label className="label-radio3" to="radio1">
								Refferals
							</label>
						</div>

						<div className="contact3-form-radio">
							<input className="input-radio3" id="radio2" type="radio" name="choice" value="get-quote"/>
							<label className="label-radio3" to="radio2">
								Crisis
							</label>
						</div>
					</div>
          <form className="form-group">
            <div className="form-row">
      
            <div className="col">
                  <input
                    value={this.firstName}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="form-control formChange"
                    onChange={this.handleInputChange}
                  />
              </div>
              <div className="col">
                  <input
                    value={this.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    className="form-control formChange"
                  />
               </div>
               </div>

                  <input
                    value={this.phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone Number"
                    className="form-control formChange"
                  />

                   <textarea
                    value={this.message}
                    name="message"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Message"
                    rows="9"
                    className="form-control formChange"
                  />
                  
                   <button className="btn btn-inside btn-boarder" onClick={this.props.handleFormSubmit}><img alt="plane" src={plane} width="64px" height="64px" /></button>
                </form>

          </div>
      </div>
  </div>


        </div>
        );

    }
}

export default Login;
