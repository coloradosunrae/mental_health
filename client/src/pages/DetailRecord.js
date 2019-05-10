import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/GatherInfo/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Layout from "../components/RecordPage/Layout";
import SideBar from "../components/RecordPage/SideBar";
import SideBarTest from "../components/RecordPage/SideBar/SideBar";
import ModalLayout from "../components/RecordPage/Modal/app";
import TimeLine from "../components/RecordPage/TimeLine";
import ClientInfo from "../components/RecordPage/ClientInfo";
import axios from 'axios';


class DetailRecord extends Component{
  state = {
    client: {}
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    API.getClient(this.props.match.params.id)
      .then(res => this.setState({ client: res.data }))
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  //  renderPage = () => {
  //    this.state.client.clinicianMessages.map(option => (
      
  //   ))} 
   


  render() {
    return (
      <div>

<SideBarTest
 firstName = {this.state.client.firstName} 
 lastName = {this.state.client.lastName} 
 phoneNumber = {this.state.client.phoneNumber}
 messageInput = {this.state.client.messageInput}

 />
     {/* <ClientInfo
         firstName = {this.state.client.firstName} 
        
        >
       <h1>
       {this.state.client.firstName} {"   "}
        {this.state.client.lastName}
        </h1>
     </ClientInfo> */}



    <div className="MainContent card">
    <ModalLayout
     firstName = {this.state.client.firstName} 
     lastName = {this.state.client.lastName} 
     clinicianMessages = {this.state.client.clinicianMessages}
     id={this.state.client._id}
    
    />



     {/* {this.state.client.clinicianMessages.map(cMessage => (
        <tbody key= {cMessage._id}>
          <tr>
            <td>{cMessage.lastName} </td>
            <td> {cMessage.phoneNumber} </td>
            <td> {cMessage.phoneNumber} </td>
          </tr>
          </tbody>
          ))} */}


    </div>
    </div>
    )
  }
}

export default DetailRecord;
