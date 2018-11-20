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
        <hr />
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
        <hr />
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

class UserGreeting extends React.Component {
  render() {
    return(<h1>Hello User!</h1>);
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Hello Guest!</h1>;
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById('dev05')
);

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout

    </button>
  )
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn:false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn:true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn:false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return(
      <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
      </div>
    );
  }
  
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('dev06')
)

class MailBox extends React.Component {

  render() {
    const unreadMessages = this.props.unreadMessages;
    return(
      <div>
        <h2>Hey...</h2>
        {unreadMessages.length > 0 && <h2> You have {unreadMessages.length} unread messages!</h2>}
        <hr />
      </div>
    );
  }
}

const messages = ['JSON', 'Re:JSON', 'JS', 'DS', 'Lua'];

ReactDOM.render(
  <MailBox unreadMessages = {messages}/>,
  document.getElementById('dev07')
)

class WarningBanner extends React.Component {

  render() {

    if(!this.props.warn) {
      return null;
    }

    return(
      <div>Warning!</div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning:true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning : !state.showWarning
    }));
  }

  render() {
    return(
      <div>
        <WarningBanner warn = {this.state.showWarning} />
         <button onClick = {this.handleToggleClick} >
          {this.state.showWarning ? 'Hide' : 'Show'}
         </button>
         <hr />
      </div>
    );
  }
  
}

ReactDOM.render(
  <Page />,
  document.getElementById('dev08')
)

class NumberList extends React.Component {

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => 
      <li>{number}</li>
    );
    return(
      <ul>{listItems}</ul>
    );
  }
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('dev10')
)

class ListItem extends React.Component {
  render() {
    return(
      <li>{this.props.value}</li>
    );
  }
}

class Keys extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => 
      <ListItem key={number.toString()} value = {number} />
    );
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

const numbers01 = [1,2,3,5,8]
ReactDOM.render(
  <Keys numbers = {numbers01}/>,
  document.getElementById('dev11')
) 

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert("Form submitted");
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
        <hr />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('dev12')
)

class Blog extends React.Component {
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) => 
            <li key={post.id}>
              {post.title}
            </li>
        )}
      </ul>
    );

    const content = this.props.posts.map((post) =>
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>  
    );

    return(
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}

const posts = [
  { id:1, title:'react-world', content:'Welcome to react-world' },
  { id:2, title:'react-universe', content:'Welcome to react-universe' }
]

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('dev13')
)

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : 'Essay here'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Essay submitted: ' + this.state.value)
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <hr />
        <label> Essay:
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type='submit' value='Submit essay' />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('dev14')
)

class FruitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Selected value: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <hr />
        <label> Select Box:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mango">Mango</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

ReactDOM.render(
  <FruitForm />,
  document.getElementById('dev15')
) 

serviceWorker.unregister();

