import React from 'react';
import ReactDOM from 'react-dom';
import Jsx from '../modules/Jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jsx />, div);
  ReactDOM.unmountComponentAtNode(div);
});
