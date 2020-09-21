import React from 'react';
import ReactDOM from 'react-dom';
import Appli from './Appli';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appli />, div);
  ReactDOM.unmountComponentAtNode(div);
});
