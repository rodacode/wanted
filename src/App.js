import React from 'react';
import './App.scss';
import { Grommet } from 'grommet';
import Home from './containers/Home';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
function App() {
  return (
    <Grommet theme={theme}>
      <Home />
    </Grommet>);
}

export default App;
