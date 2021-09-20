// import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
// import {*} from './Clock';
import {Welcome, Greeting, NumberList, Blog} from "./FunctionComponents";
import Game from "./Game";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const numbers = [1, 2, 3, 4, 5];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <Game />
      </div>
      <div id="Clock">
        <script src="./Clock.js">
          test();
        </script>
        <Clock />
        </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Welcome name="Happys4"/>
      </div>
      <div>
      <Greeting isLoggedIn={false} />
      </div>
      <div>
      <LoginControl />
      </div>
      <div>
      <NameForm />
      </div>
      <div>
      <FlavorForm />
      </div>
      <div>
      <Reservation />
      </div>
      <div>
      <NumberList numbers={numbers} />
      </div>
      <div>
      <Blog posts={posts} />
      </div>
    </div>
  );
}

export default App;
