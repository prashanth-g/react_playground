import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jsx from './Jsx';
import Message from './Message';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Jsx />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

function tick() {
    const element = (
      <div>
        <h2>The current time is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

ReactDOM.render(<Message />, document.getElementById('dev'));

serviceWorker.unregister();
