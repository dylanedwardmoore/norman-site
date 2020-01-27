import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SinglePageApplication } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePageApplication />, div);
});