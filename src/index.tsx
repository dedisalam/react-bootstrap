import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>My React and Typescript App!</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
