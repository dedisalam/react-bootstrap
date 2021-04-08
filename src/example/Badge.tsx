import React from "react";
import Badge from "../quark/Badge";

const BadgeEx = (): JSX.Element => {
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
        <Badge as="a" bg="primary">
          Primary
        </Badge>
        <Badge as="a" bg="secondary">
          Primary
        </Badge>
        <Badge as="a" bg="success">
          Primary
        </Badge>
        <Badge as="a" bg="danger">
          Primary
        </Badge>
        <Badge as="a" bg="warning">
          Primary
        </Badge>
        <Badge as="a" bg="info">
          Primary
        </Badge>
        <Badge as="a" bg="light">
          Primary
        </Badge>
        <Badge as="a" bg="dark">
          Primary
        </Badge>
      </div>
    </>
  );
};

export default BadgeEx;
