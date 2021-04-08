import React from "react";
import Button from "../quark/Button";

const Buttons = (): JSX.Element => {
  return (
    <>
      <div>
        <Button bg="primary">Primary</Button>
        <Button bg="secondary">Secondary</Button>
        <Button bg="success">Success</Button>
        <Button bg="danger">Danger</Button>
        <Button bg="warning">Warning</Button>
        <Button bg="info">Info</Button>
        <Button bg="light">Light</Button>
        <Button bg="dark">Dark</Button>
      </div>
      <div>
        <Button bg="primary" outline>
          Primary
        </Button>
        <Button bg="secondary" outline>
          Secondary
        </Button>
        <Button bg="success" outline>
          Success
        </Button>
        <Button bg="danger" outline>
          Danger
        </Button>
        <Button bg="warning" outline>
          Warning
        </Button>
        <Button bg="info" outline>
          Info
        </Button>
        <Button bg="light" outline>
          Light
        </Button>
        <Button bg="dark" outline>
          Dark
        </Button>
      </div>
      <div>
        <Button bg="primary" size="lg">
          Large button
        </Button>
        <Button bg="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button bg="primary" size="sm">
          Small button
        </Button>
        <Button bg="secondary" size="sm">
          Small button
        </Button>
      </div>
      <div>
        <Button bg="primary" size="lg" block>
          Block level button
        </Button>
        <Button bg="secondary" size="lg" block>
          Block level button
        </Button>
      </div>
      <div>
        <Button
          as="a"
          href="index.html"
          bg="primary"
          size="lg"
          active
          role="button"
          ariaPressed="true"
        >
          Primary link
        </Button>
        <Button
          as="a"
          href="index.html"
          bg="secondary"
          size="lg"
          active
          role="button"
          ariaPressed="true"
        >
          Link
        </Button>
      </div>
      <div>
        <Button size="lg" bg="primary" disabled>
          Primary button
        </Button>
        <Button size="lg" bg="secondary" disabled>
          Button
        </Button>
      </div>
      <div>
        <Button
          as="a"
          size="lg"
          bg="primary"
          ariaDisabled="true"
          role="button"
          disabled
          tabIndex={-1}
        >
          Primary link
        </Button>
        <Button
          as="a"
          size="lg"
          bg="secondary"
          ariaDisabled="true"
          role="button"
          disabled
          tabIndex={-1}
        >
          Link
        </Button>
      </div>
      <div>
        <Button
          bg="primary"
          type="button"
          dataToggle="button"
          ariaPressed="false"
        >
          Single toggle
        </Button>
      </div>
      <div>
        <div className="btn-group-toggle" data-toggle="buttons">
          <Button as="label" bg="secondary" active>
            <input type="checkbox" defaultChecked /> Checked
          </Button>
        </div>
      </div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <Button as="label" bg="secondary" active>
          <input type="radio" name="options" id="option1" defaultChecked />{" "}
          Active
        </Button>
        <Button as="label" bg="secondary">
          <input type="radio" name="options" id="option2" /> Radio
        </Button>
        <Button as="label" bg="secondary">
          <input type="radio" name="options" id="option3" /> Radio
        </Button>
      </div>
    </>
  );
};

export default Buttons;
