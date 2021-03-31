import React from "react";
import Alert from "../quark/Alert";
import AlertLink from "../quark/AlertLink";
import AlertHeading from "../quark/AlertHeading";

const AlertEx = (): JSX.Element => {
  return (
    <>
      <div>
        <Alert bg="primary">A simple primary alert—check it out!</Alert>
        <Alert bg="secondary">A simple secondary alert—check it out!</Alert>
        <Alert bg="success">A simple success alert—check it out!</Alert>
        <Alert bg="danger">A simple danger alert—check it out!</Alert>
        <Alert bg="warning">A simple warning alert—check it out!</Alert>
        <Alert bg="info">A simple info alert—check it out!</Alert>
        <Alert bg="light">A simple light alert—check it out!</Alert>
        <Alert bg="dark">A simple dark alert—check it out!</Alert>
      </div>
      <div>
        <Alert bg="primary">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="secondary">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="success">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="danger">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="warning">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="info">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="light">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
        <Alert bg="dark">
          A simple primary alert with{" "}
          <AlertLink href="testing.html">an example link</AlertLink>. Give it a
          click if you like.
        </Alert>
      </div>
      <div>
        <Alert bg="success">
          <AlertHeading>Well done!</AlertHeading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </div>
      <div>
        <Alert bg="warning" dismissible>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </Alert>
      </div>
    </>
  );
};

export default AlertEx;
