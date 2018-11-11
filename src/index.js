import React from 'react';
import ReactDOM from 'react-dom';

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
    document.getElementById('root')
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
  document.getElementById('dev')
);

