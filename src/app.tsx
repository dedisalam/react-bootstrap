import React from 'react';
import { calc } from 'csscalc';
import { Navbar } from './components';
import { SPACER } from './variables';

function App() {
  return (
    <Navbar />
  );
}

// eslint-disable-next-line no-console
console.log(calc(`${SPACER} + 10rem + 10px`));

export default App;
