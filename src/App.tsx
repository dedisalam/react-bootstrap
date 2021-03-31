import React from "react";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import Badge from "./quark/Badge";

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Primary</Badge>
        <Badge bg="success">Primary</Badge>
        <Badge bg="danger">Primary</Badge>
        <Badge bg="warning">Primary</Badge>
        <Badge bg="info">Primary</Badge>
        <Badge bg="light">Primary</Badge>
        <Badge bg="dark">Primary</Badge>
      </div>
      <div>
        <Badge bg="primary" pill>
          Primary
        </Badge>
        <Badge bg="secondary" pill>
          Primary
        </Badge>
        <Badge bg="success" pill>
          Primary
        </Badge>
        <Badge bg="danger" pill>
          Primary
        </Badge>
        <Badge bg="warning" pill>
          Primary
        </Badge>
        <Badge bg="info" pill>
          Primary
        </Badge>
        <Badge bg="light" pill>
          Primary
        </Badge>
        <Badge bg="dark" pill>
          Primary
        </Badge>
      </div>
      <div>
        <Badge bg="primary" link>
          Primary
        </Badge>
        <Badge bg="secondary" link>
          Primary
        </Badge>
        <Badge bg="success" link>
          Primary
        </Badge>
        <Badge bg="danger" link>
          Primary
        </Badge>
        <Badge bg="warning" link>
          Primary
        </Badge>
        <Badge bg="info" link>
          Primary
        </Badge>
        <Badge bg="light" link>
          Primary
        </Badge>
        <Badge bg="dark" link>
          Primary
        </Badge>
      </div>
    </>
  );
};

export default App;
