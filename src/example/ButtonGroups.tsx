import React from "react";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import Button from "../quark/Button";
import ButtonGroup from "../quark/ButtonGroup";

const ButtonGroups = (): JSX.Element => {
  return (
    <>
      <ButtonGroup role="group" ariaLabel="Basic example">
        <Button bg="secondary" type="button">
          Left
        </Button>
        <Button bg="secondary" type="button">
          Middle
        </Button>
        <Button bg="secondary" type="button">
          Right
        </Button>
      </ButtonGroup>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <ButtonGroup marginRight="2" role="group" ariaLabel="First group">
          <Button bg="secondary" type="button">
            1
          </Button>
          <Button bg="secondary" type="button">
            2
          </Button>
          <Button bg="secondary" type="button">
            3
          </Button>
          <Button bg="secondary" type="button">
            4
          </Button>
        </ButtonGroup>
        <ButtonGroup marginRight="2" role="group" ariaLabel="Second group">
          <Button type="button" bg="secondary">
            5
          </Button>
          <Button type="button" bg="secondary">
            6
          </Button>
          <Button type="button" bg="secondary">
            7
          </Button>
        </ButtonGroup>
        <ButtonGroup role="group" ariaLabel="Third group">
          <Button type="button" bg="secondary">
            8
          </Button>
        </ButtonGroup>
      </div>

      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <ButtonGroup marginRight="2" role="group" ariaLabel="First group">
          <Button type="button" bg="secondary">
            1
          </Button>
          <Button type="button" bg="secondary">
            2
          </Button>
          <Button type="button" bg="secondary">
            3
          </Button>
          <Button type="button" bg="secondary">
            4
          </Button>
        </ButtonGroup>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon">
              @
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </div>
      </div>

      <div
        className="btn-toolbar justify-content-between"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <ButtonGroup role="group" ariaLabel="First group">
          <Button type="button" bg="secondary">
            1
          </Button>
          <Button type="button" bg="secondary">
            2
          </Button>
          <Button type="button" bg="secondary">
            3
          </Button>
          <Button type="button" bg="secondary">
            4
          </Button>
        </ButtonGroup>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon2">
              @
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </div>
      </div>

      <div>
        <ButtonGroup size="lg" role="group" ariaLabel="...">
          ...
        </ButtonGroup>
        <ButtonGroup role="group" ariaLabel="...">
          ...
        </ButtonGroup>
        <ButtonGroup size="sm" role="group" ariaLabel="...">
          ...
        </ButtonGroup>
      </div>
      <ButtonGroup role="group" ariaLabel="Button group with nested dropdown">
        <Button type="button" bg="secondary">
          1
        </Button>
        <Button type="button" bg="secondary">
          2
        </Button>
        <ButtonGroup role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="index.html">
              Dropdown link
            </a>
            <a className="dropdown-item" href="index.html">
              Dropdown link
            </a>
          </div>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button type="button" bg="secondary">
          1
        </Button>
        <Button type="button" bg="secondary">
          2
        </Button>
        <Button type="button" bg="secondary">
          3
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroups;
