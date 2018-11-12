import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jsx from './modules/Jsx';
import Message from './modules/Message';
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

ReactDOM.render(<Message />, document.getElementById('dev01'));

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('dev01')
);

// event handling

class ActionLink extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        Click me
      </a>
    );
  }
}

ReactDOM.render(
  <ActionLink />,
  document.getElementById('dev03')
);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
         {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('dev04'));

serviceWorker.unregister();

