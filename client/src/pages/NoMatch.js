import React from "react";
import { Col, Row, Container } from "../components/GatherInfo/Grid";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <div className="text-center">
    <h1 className="display-1 font-weight-bold">404</h1>
    <p className="h1">Page not found.</p>
    <p className="h2 font-weight-normal mt-3 mb-4">
      The page you are looking for might have been removed.
    </p>
    <Link to="/">
      <Button color="primary" size="lg">
        Return to website
      </Button>
    </Link>
  </div>
  );
}

export default NoMatch;
