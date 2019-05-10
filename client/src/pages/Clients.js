import React, { Component } from "react";
import axios from 'axios';
import API from "../utils/API";
import { Link } from "react-router-dom";




import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";

import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

// import { MoreHorizontal } from "react-feather";


class ClientsList extends Component {
  state = {
    clients: [],
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    messageInput: ""
  }


  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    API.getClients()
    .then 
    (res =>
      this.setState({ clients: res.data, firstName: "", lastName: "", phoneNumber: "" })
    )
    .catch((error) => {
      if(error.response.status === 401) {
        this.props.history.push("/login");
      }
    });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <Container fluid className="p-0">
        <Row>
            <Col xl="8">
  <Card>
    
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Clients
        {" "}
        {localStorage.getItem('jwtToken') &&
       <button class="btn btn-primary" onClick={this.logout}>Logout</button>
     }
      </CardTitle>
    </CardHeader>
    {this.state.clients.length ? (
    <CardBody>
      <Table className="mb-0">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {this.state.clients.map(client => (
        <tbody key= {client._id}>
          <tr>
            <Link to={"/clients/" + client._id}>
            <td>{client.firstName}</td>
            </Link>
            <td>{client.lastName} </td>
            <td> {client.phoneNumber} </td>
            <td> {client.phoneNumber} </td>
            <td><Badge color="success">Active</Badge></td>
          </tr>
          </tbody>
          ))}
      </Table>
    </CardBody>
     ) : (
      <h3>No Results to Display</h3>
    )}
  </Card>
  </Col>
  <Col xl="4">
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">

          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Angelica Ramos
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row noGutters>
        <Col sm="3" xl="12" className="col-xxl-3 text-center">
          <img
        
            width="64"
            height="64"
            className="rounded-circle mt-2"
            alt="Angelica Ramos"
          />
        </Col>
        <Col sm="9" xl="12" className="col-xxl-9">
          <strong>About me</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>

      <Table size="sm" className="my-2">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Angelica Ramos</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>The Wiz</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>angelica@ramos.com</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>+1234123123123</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>
              <span className="badge badge-success">Active</span>
            </td>
          </tr>
        </tbody>
      </Table>

      <hr />

      <strong>Activity</strong>

      <Timeline className="mt-2">
        <TimelineItem>
          <strong>Signed out</strong>
          <span className="float-right text-muted text-sm">30m ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Created invoice #1204</strong>
          <span className="float-right text-muted text-sm">2h ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Discarded invoice #1147</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Signed in</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Signed up</strong>
          <span className="float-right text-muted text-sm">2d ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </TimelineItem>
      </Timeline>
    </CardBody>
  </Card>
      </Col>
  </Row>
  </Container>

) } }

export default ClientsList;
