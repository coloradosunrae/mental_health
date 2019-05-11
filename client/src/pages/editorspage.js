import React from "react";
import {Container} from "../components/GatherInfo/ContainerBox"
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle
  } from "reactstrap";
  

function EditorsPage () {
    return(
<Container>
<Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Introduction
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div id="introduction">
        <p className="lead">
         I want to give a little explanation of why I do this. 
        </p>

        <p>
         Everything on this site is supposed to be as calming as possible in a world of caos. 
        </p>
        <p>Thanks, and good luck!</p>
      </div>
    </CardBody>
  </Card>

</Container>
)
}

export default EditorsPage;