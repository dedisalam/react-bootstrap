import React from "react";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import Button from "./quark/Button";
import Card from "./quark/Card";
import CardBody from "./quark/CardBody";
import CardTitle from "./quark/CardTitle";
import CardText from "./quark/CardText";

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img-top"
            alt="..."
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </CardText>
            <Button as="a" bg="primary">
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>This is some text within a card body.</CardBody>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </CardText>
            <a href="index.html" className="card-link">
              Card link
            </a>
            <a href="index.html" className="card-link">
              Another link
            </a>
          </CardBody>
        </Card>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-footer">Card footer</div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="index.html" className="card-link">
              Card link
            </a>
            <a href="index.html" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="index.html" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="index.html" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card text-right" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="index.html"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="index.html"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="index.html" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="card mb-3">
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
      <div>
        <div className="card bg-dark text-white">
          <img
            src="https://dummyimage.com/256x180/000/ff00ff"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://dummyimage.com/256x180/000/ff00ff" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-success mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-danger mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-warning mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-info mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-dark mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-primary">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div
          className="card border-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">Header</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-danger">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-warning">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-info">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
        <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Header</div>
          <div className="card-body text-dark">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent border-success">
            Header
          </div>
          <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&lsquo;s content.
            </p>
          </div>
          <div className="card-footer bg-transparent border-success">
            Footer
          </div>
        </div>
      </div>
      <div>
        <div className="card-group">
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-group">
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-deck">
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-deck">
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src="https://dummyimage.com/256x180/000/ff00ff"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-columns">
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Card title that wraps to a new line
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card bg-primary text-white text-center p-3">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer text-white">
                <small>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has a regular title and short paragraphy of text below
                it.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://dummyimage.com/256x180/000/ff00ff"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="card p-3 text-right">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is another card with title and supporting text below. This
                card has some additional content to make it slightly taller
                overall.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
