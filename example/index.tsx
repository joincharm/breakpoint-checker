import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BreakpointChecker} from "../src"

const App = () => {
  return (
      <BreakpointChecker />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
